import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
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

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  content: z.string().min(10, "Content must be at least 10 characters"),

  publishDate: z.coerce.date(),

  excerpt: z.string().min(3, "excerpt must be at least 3 characters"),
  slug: z.string().min(3, "slug must be at least 3 characters"),

  bannerUrl: z.string(),
});

const BlogForm = ({ blogData }) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "ders6k4it",
    },
  });

  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: blogData || {
      title: "",
      content: "",
      publishDate: new Date(),
      excerpt: "",
      slug: "",
      bannerUrl: null,
    },
  });
  const onAdd = async (data) => {
    console.log(data);
    try {
      const response = await api.post("/blogs", data);
      console.log(response);
      if (response.status === 201) {
        toast.success("Blogs created successfully");
        navigate("/client/blogs");
      } else {
        toast.error("Failed to create blog.");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || " An error occured while creating the blog");
    }
  };

  const onEdit = async (data) => {
    console.log(data);
    try {
      const response = await api.patch(`/blogs/${blogData._id}`, data);
      console.log(response);
      if (response.status === 200) {
        toast.success("Blog updated successfully");
        navigate("/client/blogs");
      } else {
        toast.error("Failed to update blogs.");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.message || " An error occured while updating the blogs",
      );
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      toast.error("Please select an image to upload.");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "trips_preset");
    formData.append("cloud_name", "ders6k4it");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/ders6k4it/image/upload",
      {
        method: "POST",
        body: formData,
      },
    );

    const uploadedData = await response.json();
    const bannerUrl = uploadedData.secure_url;
    form.setValue("bannerUrl", bannerUrl);
    if (response.ok) {
      toast.success("Image uploaded successfully.");
    } else {
      toast.error("Failed to upload image.");
    }

    conslole.log(file);
  };

  return (
    <form onSubmit={form.handleSubmit(blogData ? onEdit : onAdd)}>
      <Card>
        <CardHeader>
          <CardTitle>Blog Info</CardTitle>
          <CardDescription>Enter Blog infromation below:</CardDescription>
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
                  placeholder="Blog to BarjuTall"
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
            name="content"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Content</FieldLabel>
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
              name="excerpt"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Excerpt</FieldLabel>
                  <Textarea
                    type="text"
                    placeholder="something about the blog"
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
              name="slug"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>slug</FieldLabel>
                  <Textarea
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
            <Controller
              name="publishDate"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>PublishDate</FieldLabel>
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
              name="bannerUrl"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Banner URl </FieldLabel>
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
            <Input type="file" onChange={handleImageUpload} />
            <AdvancedImage />
          </div>
        </CardContent>
      </Card>
      <div className="float-right">
        <Button type="submit" className={"mt-6"}>
          Post
        </Button>
      </div>
    </form>
  );
};

export default BlogForm;
