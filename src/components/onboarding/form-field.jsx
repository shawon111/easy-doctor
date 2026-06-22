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
    <div className={cn("space-y-2", className)}>
      {label && (
        <Label htmlFor={htmlFor} className={cn(error && "text-destructive")}>
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
      className={className}
      aria-invalid={error ? true : undefined}
      {...props}
    />
  );
}

export function TextAreaField({ error, className, ...props }) {
  return (
    <Textarea
      className={cn("min-h-28 resize-y", className)}
      aria-invalid={error ? true : undefined}
      {...props}
    />
  );
}
