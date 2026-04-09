import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema =z.object({
    name: z.string().min(3,"Name must be at least 3 character."),
    email: z.string().email(),
    password: z.string().min(8,"Password must be 8 character"),
    confirmPassword: z.string().min(8,"Password must be 8 character"),
}).refine((data)=>{
       data.password=== data.confirmPassword
},
{
    message:"Password don't match",
    path: ["confirmPassword"]
})

const Register = () => {

    const form =useForm({
        resolver:zodResolver(formSchema),
        defaultValues:{
            name:"",
            email:"",
            password:"",
            confirmPassword:"",
        }
    });

    const onSubmit =(data)=>{
          console.log(data)
    }

  return (
     <form onSubmit={form.handleSubmit(onSubmit)}></form>
    
  )
}

export default Register