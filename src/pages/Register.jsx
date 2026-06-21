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
import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

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
  const {token} = useAuth();

  if (token) {
    return(
      <Navigate to ="/dashboard" />
    )
    
  }
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
    <div className="bg-[url(https://plus.unsplash.com/premium_photo-1702217998652-b9b795f52d5f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-[100dvh] pt-40">

   
    <form  onSubmit={form.handleSubmit(onSubmit)}>
      <Card className="md:w-1/4 w-3/4 mx-auto transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
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
              <a className="text-blue-500 ml-2" href="http://localhost:5173/login">Login</a>
            </div>
        </CardFooter>
      </Card>
     
    </form>
     </div>
  );
};

export default Register;
