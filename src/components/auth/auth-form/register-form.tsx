'use client'

import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema, registerType } from "@/utils/auth/validation";
import {
  Button, Card, CardContent, InputField, Typography, Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";

export function RegisterForm() {
  const method = useForm<registerType>({
    mode: "all",
    resolver: yupResolver(registerSchema),
  });

  const { register, handleSubmit } = method;

  const onSubmit = (data: registerType) => {
    console.log(data);
  };

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
          <div className="grid grid-cols-4 grid-rows-1 gap-4">
            <div className="col-span-2">
              <InputField placeholder="John" {...register("firstName")} name="firstName" label="First Name" />
            </div>
            <div className="col-span-2 col-start-3">
              <InputField placeholder="Doe" {...register("lastName")} name="lastName" label="Last Name" />
            </div>
          </div>
          <InputField placeholder="JohnDoe@gmail.com" {...register("email")} name="email" label="Email" />
          <InputField placeholder="Your password here..." {...register("password")} label="Password" name="password" type="password" />
          <InputField placeholder="Confirm your password here..." {...register("confirmPassword")} label="Confirm Password" name="confirmPassword" type="password" />
          <Select>
            <SelectTrigger className="w-[180px] text-white">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Student</SelectItem>
                <SelectItem value="banana">Professor</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            className="bg-primary hover:bg-primary/90 w-full font-bold"
            onClick={handleSubmit(onSubmit)}
            size="lg"
          >
            Register
          </Button>
        </CardContent>
      </Card>
    </FormProvider>
  );
}