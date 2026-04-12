import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import api from "@/api/axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const formSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 character."),
    email: z.string().email(),
    password: z.string().min(8, "Password must be 8 character"),
    confirmPassword: z.string().min(8, "Password must be 8 character"),
  })
  .refine(
    (data) => {
     return data.password === data.confirmPassword;
    },
    {
      message: "Password don't match",
      path: ["confirmPassword"],
    },
  );

const Register = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit =async (data) => {
    console.log(data);
    const newData = {
      name:data.name,
      email:data.email,
      password:data.password
    }
    try {
      const response =await api.post("/auth/register",newData);
      console.log(response);

      if(response.data.success){
        toast.success("Registration successfull");
        navigate("/login");
      }else{
        toast.error("Registration failed ,Try again!")
      }
    } catch (error) {
      console.error("Register fail",error)
     toast.error("Registration failed ,Try again!")
    }
  };

  return (
    <form  onSubmit={form.handleSubmit(onSubmit)}>
      <Card className="w-1/4 mx-auto mt-40">
        <CardHeader>
          <CardTitle className="flex justify-center">Registration Form</CardTitle>
          <CardDescription className="flex justify-center ">
            Enter you valid Details to get started.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                <Input type="text"
                placeholder="Jhon Deo"
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
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input type="email" placeholder="abc@example.com"
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
                <Input type="password" 
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

         <Controller
            name="confirmPassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
                <Input type="password"
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
            <Button className="w-full" type="submit">Submit</Button>
            
            <div className=" text-center mt-3">
              Already hava an account ?
              <a className="text-blue-500 ml-2" href="/login">Login</a>
            </div>
        </CardFooter>
      </Card>
     
    </form>
  );
};

export default Register;
