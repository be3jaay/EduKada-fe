"use client";

import { Button, Card, CardContent, CardFooter, InputField } from "@/components/ui";
import { Typography } from "@/components/ui/typography";
import * as React from "react"
import { yupResolver } from "@hookform/resolvers/yup";
import { Separator } from "@/components/ui/separator";
import { FaGoogle } from "react-icons/fa";
import { loginSchema, loginType } from "@/utils/auth/validation";
import { FormProvider, useForm } from "react-hook-form";

export function LoginForm() {
  const method = useForm<loginType>({
    mode: "all",
    resolver: yupResolver(loginSchema),
  })

  const { handleSubmit, register } = method;

  const onSubmit = (data: loginType) => {
    console.log(data)
  }

  return (
    <FormProvider {...method}>
      <Card>
        <CardContent className="space-y-4 py-4">
          <Typography variant="h1" color="primary">
            Sign In
          </Typography>
          <Typography variant="subtitle1" color="secondary" className="mb-4">
            Welcome Back! Please enter your account details.
          </Typography>
          <InputField
            placeholder="JohnDoe@gmail.com"
            label="Email"
            {...register("email")}
          />
          <InputField
            placeholder="Your password here..."
            label="Password"
            type="password"
            {...register("password")}
          />
          <Typography variant="subtitle2" color="secondary">
            Forgot your password?
          </Typography>
          <Button
            className="bg-primary hover:bg-primary/90 w-full font-bold"
            onClick={handleSubmit(onSubmit)}
            size="lg"
          >
            Login
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Separator className="my-6" />
          <Button
            onClick={handleSubmit(onSubmit)}
            size="lg"
            className="w-full flex items-center text-dark hover:text-primary/90"
            variant="outline"
          >
            Sign in with Google
            <FaGoogle />
          </Button>
        </CardFooter>
      </Card>
    </FormProvider>
  )
}