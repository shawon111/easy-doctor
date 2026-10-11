"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field } from "./form-field";

export function TagInputField({
  label,
  id,
  required,
  hint,
  error,
  value = [],
  onChange,
  placeholder,
}) {
  const [input, setInput] = useState("");

  const addTag = () => {
    const trimmed = input.trim();
    if (!trimmed || value.includes(trimmed)) return;
    onChange([...value, trimmed]);
    setInput("");
  };

  const removeTag = (tag) => {
    onChange(value.filter((item) => item !== tag));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addTag();
    }
  };

  return (
    <Field label={label} htmlFor={id} required={required} hint={hint} error={error}>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          id={id}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="h-12 flex-1 rounded-xl border-slate-200 bg-white px-3.5 shadow-sm shadow-slate-950/[0.02] placeholder:text-slate-400 focus-visible:border-blue-400 focus-visible:ring-blue-500/15"
        />
        <Button
          type="button"
          variant="outline"
          onClick={addTag}
          disabled={!input.trim() || value.includes(input.trim())}
          className="h-12 rounded-xl border-slate-200 px-4"
        >
          <Plus className="size-4" />
          Add
        </Button>
      </div>
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1" aria-label={`${label} added`}>
          {value.map((tag) => (
            <Badge key={tag} variant="secondary" className="gap-1.5 rounded-lg border border-blue-100 bg-blue-50 px-2.5 py-1.5 text-blue-800">
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="rounded-full p-0.5 text-blue-600 hover:bg-blue-100"
                aria-label={`Remove ${tag}`}
              >
                <X className="size-3.5" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </Field>
  );
}
