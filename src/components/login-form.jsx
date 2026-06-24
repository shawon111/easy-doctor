"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "./auth/login-schema"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

export function LoginForm({
  className,
  ...props
}) {
  // useRouter hook
  const router = useRouter();
  // react-hook-form setup
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  // Handle form submission
  const handleLogin = async (data) => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }
    const result = await response.json();
    return result;
  };

  const { mutate, isPending } = useMutation({
    mutationFn: handleLogin,
    onSuccess: () => {
      toast.success("Logged in successfully!");
      router.push("/dashboard");
    },
    onError: (error) => {
      toast.error("Invalid enmail or password");
    }
  })
  const onSubmit = (data) => {
    mutate(data);
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...form.register("email")}
                  required />
                {form.formState.errors.email && (
                  <p className="text-xs text-destructive" role="alert">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password"
                  type="password"
                  {...form.register("password")}
                  required />
                {form.formState.errors.password && (
                  <p className="text-xs text-destructive" role="alert">
                    {form.formState.errors.password.message}
                  </p>
                )}
              </Field>
              <Field>
                <Button disabled={isPending} className="cursor-pointer" type="submit">
                  {isPending ? "Logging in..." : "Login"}
                </Button>
                <Button disabled variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link href="/register">Register</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
