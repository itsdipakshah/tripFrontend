import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import api from "@/api/axios";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { useNavigate } from "react-router-dom";
//first i make  a schema of login
const loginSchema = z.object({
    email: z.string().email(),
      password: z.string().min(8, "Password must be 8 character"),
});

const Login = () => {
  const navigate = useNavigate()
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);

    const newData = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await api.post("/auth/login", newData);
      console.log(response);

      if (response.data.success) {
        toast.success("Login successfully");
        navigate("/")
      } else {
        toast.error("Login failed,Try again");
      }
    } catch (error) {
      console.log("Login failed ", error);
      toast.error("Login failed ,Try again");
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Card className="w-1/4 mx-auto mt-40">
        <CardHeader>
          <CardTitle className="flex justify-center">
             Login Page
          </CardTitle>
          <CardDescription className="flex justify-center ">
            Enter you valid Details to get access.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">

         <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
                  type="email"
                  placeholder="abc@example.com"
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                <Input
                  type="password"
                  placeholder="*******"
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </CardContent>
        <CardFooter className="block">
          <Button className="w-full" type="submit">
            Login
          </Button>

          <div className=" text-center mt-3">
            Don't hava an account ?
            <a className="text-blue-500 ml-2" href="http://localhost:5173/register">
              Register
            </a>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
};

export default Login;
