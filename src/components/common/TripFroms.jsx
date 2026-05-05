import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import api from "@/api/axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const durationSchema = z.object({
  days: z.coerce.number().positive("Days must be a positive number"),
  nights: z.coerce.number().positive("Nights must be a positive number"),
});

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.coerce.number().positive("Price must be a positive number"),
  duration: durationSchema,
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  location: z.string().min(3, "Location must be at least 3 characters"),
  maxParticipants: z
    .coerce.number()
    .positive("Max participants must be a positive number"),
  availableSeats: z
    .coerce.number()
    .positive("Available seats must be a positive number"),
  imageUrl: z.string(),
});

const TripForms = ({tripData}) => {
  const navigate =useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: tripData || {
      title: "",
      description: "",
      price: "",
      duration: {
        days: 0,
        nights: 0,
      },
      startTime: new Date(),
      endTime: new Date(),
      location: "",
      maxParticipants: "",
      availableSeats: "",
      imageUrl: null,
    },
  });
  const onAdd =async (data) => {
   
    console.log(data);
    try {
      const response =await api.post("/trips",data);
      console.log(response)
      if (response.status === 201) {
        toast.success("Trip created successfully");
        navigate("/trips")
        
      }else{
        toast.error("Failed to create trip.")
      }
    } catch (error) {
     console.log(error);
     toast.error(error.message || " An error occured while creating the trip")
      
    }
  };

  const onEdit =async(data) => {
   
    console.log(data);
    try {
      const response =await api.patch(`/trips/${tripData._id}`,data);
      console.log(response)
      if (response.status === 200) {
        toast.success("Trip updated successfully");
        navigate("/trips")
        
      }else{
        toast.error("Failed to update trip.")
      }
    } catch (error) {
     console.log(error);
     toast.error(error.message || " An error occured while updating the trip")
      
    }
  };
  return (
    <form onSubmit={form.handleSubmit(tripData ? onEdit : onAdd)}>
      <Card>
        <CardHeader>
          <CardTitle>Trip Info</CardTitle>
          <CardDescription>Enter trip infromation below:</CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                <Input
                  type="text"
                  placeholder="Trip to BarjuTall"
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
            name="description"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                <Textarea
                  type="text"
                  placeholder="read something excited about the barjulake......"
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

          <div className="grid grid-cols-2 gap-4">
            <Controller
              name="price"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Price</FieldLabel>
                  <Input
                    min="0"
                    type="number"
                    placeholder="10000"
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
              name="location"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Location</FieldLabel>
                  <Input
                    type="text"
                    placeholder="Eg, Sunsari,Chimdi"
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
          </div>
        </CardContent>
      </Card>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Trip Duration</CardTitle>
          <CardDescription>Enter Trip Duration Details:</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Controller
              name="startTime"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>startTime</FieldLabel>
                  <Input
                    type="date"
                    min="0"
                    placeholder="DD-MM-YYYY"
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
              name="endTime"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>endTime</FieldLabel>
                  <Input
                    type="date"
                    min="0"
                    placeholder="DD-MM-YYYY"
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
              name="duration.days"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Days</FieldLabel>
                  <Input
                    min="0"
                    type="number"
                    placeholder="eg, 5"
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
              name="duration.nights"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Nights</FieldLabel>
                  <Input
                    min="0"
                    type="number"
                    placeholder="2"
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
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Number of seats</CardTitle>
          <CardDescription>Enter total seats you want:</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Controller
              name="maxParticipants"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Max Participants</FieldLabel>
                  <Input
                    type="number"
                    min="0"
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
              name="availableSeats"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Available Seats</FieldLabel>
                  <Input
                    type="number"
                    min="0"
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
              name="imageUrl"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Image URl </FieldLabel>
                  <Input
                    type="text"
                    
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
          
          </div>
        </CardContent>
      </Card>

      <div className="float-right">
        <Button type="submit"  className={"mt-6"}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default TripForms;
