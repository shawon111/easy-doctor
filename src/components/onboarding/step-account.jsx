"use client";

import { Field, TextField } from "./form-field";

export function StepAccount({ register, errors }) {
  return (
    <div className="space-y-4">
      <Field
        label="Full name"
        htmlFor="name"
        required
        error={errors.name?.message}
      >
        <TextField
          id="name"
          placeholder="Dr. Jane Smith"
          error={errors.name?.message}
          {...register("name")}
        />
      </Field>

      <Field
        label="Email"
        htmlFor="email"
        required
        error={errors.email?.message}
      >
        <TextField
          id="email"
          type="email"
          placeholder="you@clinic.com"
          error={errors.email?.message}
          {...register("email")}
        />
      </Field>

      <Field
        label="Password"
        htmlFor="password"
        required
        hint="At least 8 characters"
        error={errors.password?.message}
      >
        <TextField
          id="password"
          type="password"
          placeholder="••••••••"
          error={errors.password?.message}
          {...register("password")}
        />
      </Field>

      <Field
        label="Phone"
        htmlFor="phone"
        optional
        error={errors.phone?.message}
      >
        <TextField
          id="phone"
          type="tel"
          placeholder="+1 555 000 0000"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </Field>

      <Field
        label="Profile picture URL"
        htmlFor="profilePicture"
        optional
        hint="Link to your profile photo"
        error={errors.profilePicture?.message}
      >
        <TextField
          id="profilePicture"
          type="url"
          placeholder="https://example.com/photo.jpg"
          error={errors.profilePicture?.message}
          {...register("profilePicture")}
        />
      </Field>
    </div>
  );
}
