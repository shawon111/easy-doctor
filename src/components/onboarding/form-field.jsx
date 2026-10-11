"use client";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function getFieldError(errors, path) {
  const keys = path.replace(/\[(\d+)\]/g, ".$1").split(".");
  let current = errors;

  for (const key of keys) {
    if (current == null) return undefined;
    current = current[key];
  }

  return current?.message;
}

export function Field({
  label,
  htmlFor,
  required,
  optional,
  error,
  hint,
  className,
  children,
}) {
  return (
    <div className={cn("space-y-2.5", className)}>
      {label && (
        <Label htmlFor={htmlFor} className={cn("text-sm font-medium text-slate-700", error && "text-destructive")}>
          {label}
          {required && <span className="ml-0.5 text-destructive">*</span>}
          {optional && (
            <span className="ml-1.5 text-xs font-normal text-muted-foreground">
              (optional)
            </span>
          )}
        </Label>
      )}
      {children}
      {hint && !error && (
        <p className="text-xs text-muted-foreground">{hint}</p>
      )}
      {error && (
        <p className="text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextField({ error, className, ...props }) {
  return (
    <Input
      className={cn(
        "h-12 rounded-xl border-slate-200 bg-white px-3.5 shadow-sm shadow-slate-950/[0.02] placeholder:text-slate-400 focus-visible:border-blue-400 focus-visible:ring-blue-500/15",
        className
      )}
      aria-invalid={error ? true : undefined}
      {...props}
    />
  );
}

export function TextAreaField({ error, className, ...props }) {
  return (
    <Textarea
      className={cn("min-h-40 resize-y rounded-xl border-slate-200 bg-white px-3.5 py-3 shadow-sm shadow-slate-950/[0.02] placeholder:text-slate-400 focus-visible:border-blue-400 focus-visible:ring-blue-500/15", className)}
      aria-invalid={error ? true : undefined}
      {...props}
    />
  );
}
