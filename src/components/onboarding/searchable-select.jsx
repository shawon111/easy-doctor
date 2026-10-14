"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Popover as PopoverPrimitive } from "radix-ui";
import { Check, ChevronDown, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function SearchableSelect({
  value,
  onChange,
  options = [],
  placeholder = "Select...",
  searchPlaceholder = "Search...",
  disabled = false,
  error = false,
  id,
  className,
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setSearch("");
    }
  }, [open]);

  const filteredOptions = useMemo(() => {
    if (!search.trim()) return options;
    const query = search.toLowerCase().trim();
    return options.filter((opt) => opt.toLowerCase().includes(query));
  }, [options, search]);

  const handleSelect = (option) => {
    onChange?.(option);
    setOpen(false);
  };

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={disabled ? undefined : setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <button
          type="button"
          id={id}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-expanded={open}
          className={cn(
            "flex h-12 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3.5 text-left text-sm shadow-sm shadow-slate-950/[0.02] transition-colors outline-none",
            "focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500/15",
            disabled && "cursor-not-allowed bg-slate-50 text-slate-400 hover:bg-slate-50",
            error && "border-rose-400 ring-2 ring-rose-500/10",
            className
          )}
        >
          <span className={cn("truncate", !value && "text-slate-400")}>
            {value || placeholder}
          </span>
          <ChevronDown
            className={cn(
              "size-4 shrink-0 text-slate-400 transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </button>
      </PopoverPrimitive.Trigger>

      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="start"
          sideOffset={6}
          className={cn(
            "z-50 w-[var(--radix-popover-trigger-width)] min-w-[260px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10 outline-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          )}
        >
          <div className="flex items-center border-b border-slate-100 px-3 py-2.5">
            <Search className="mr-2 size-4 shrink-0 text-slate-400" />
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
            {search ? (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="rounded p-0.5 text-slate-400 hover:text-slate-600"
                aria-label="Clear search"
              >
                <X className="size-3.5" />
              </button>
            ) : null}
          </div>

          <div className="max-h-64 overflow-y-auto p-1 text-sm">
            {filteredOptions.length === 0 ? (
              <div className="px-3 py-4 text-center text-xs text-slate-500">
                No matching city or town found
              </div>
            ) : (
              filteredOptions.map((option) => {
                const isSelected = value === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleSelect(option)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors",
                      isSelected
                        ? "bg-blue-50 font-medium text-blue-700"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    <span>{option}</span>
                    {isSelected ? <Check className="size-4 shrink-0 text-blue-600" /> : null}
                  </button>
                );
              })
            )}
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
