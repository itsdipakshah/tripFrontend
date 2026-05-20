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

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { jwtDecode } from "jwt-decode";


//first i make  a schema of login
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be 8 character"),
});

const Login = () => {
 const navigate = useNavigate();
    const { token, login } = useAuth();

    if(token){
        const decodedToken = token ? jwtDecode(token) : null;

        return (
            <Navigate to={decodedToken.role === "admin" ? "/dashboard" : "/client/dashboard"} />
        )
    }

    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = async (data) => {
        console.log(data)
          try{
            const response = await api.post("/auth/login", data);
            console.log(response);  

            if(response.status === 200){
                toast.success("Login Successful!")
                login(data, response.data.accessToken)

                 const decodedToken =  response.data.accessToken ? jwtDecode(response.data.accessToken) : null;

                 if(decodedToken.role === "admin"){
                    navigate("/dashboard");
                 }else{
                    navigate("/client/dashboard");
                 }
            }else{
                toast.error("Login failed. Please try again.")
            }
        }catch (error){
            console.error("Login failed:", error);
            toast.error("Login failed. Please try again.")
        }
    }


  return (
    <div className="bg-[url(https://plus.unsplash.com/premium_photo-1702217998652-b9b795f52d5f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-[100dvh] pt-40 ">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-1/4 mx-auto">
          <CardHeader>
            <CardTitle className="flex justify-center">Login Page</CardTitle>
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
              <a
                className="text-blue-500 ml-2"
                href="http://localhost:5173/register"
              >
                Register
              </a>
            </div>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default Login;
