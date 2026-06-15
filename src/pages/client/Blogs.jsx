import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import useApi from "@/hooks/useApi";
import { formatDate } from "@/lib/FormatData";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blogs = () => {
  const { data, error, loading } = useApi("/blogs");

  const badgeColor = (status) => {
    switch (status) {
      case True:
        return "bg-green-500";

      case False:
        return "bg-orange-500";

      default:
        return "bg-gray-500";
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main className="px-20 py-8">
      <Card>
        <CardHeader className="border-b">
          <CardTitle>Blogs Page</CardTitle>
          <CardDescription>Show all blogs for trip.</CardDescription>
          <CardAction className="ml-auto">
            <a href="/client/blogs/add">
            <Button className="bg-blue-500 text-white px-4 py-2 rounded">
              <Plus />Post Blog
            </Button>
          </a>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>A list of your recent Blogs.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>S.N.</TableHead>
                <TableHead className="w-[100px]">Title</TableHead>
                <TableHead>Excerpt</TableHead>
                <TableHead>AuthorId</TableHead>
                <TableHead>PublishedDate</TableHead>

                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data && data.length > 0 ? (
                data.map((blog, index) => {
                  return (
                    <TableRow key={blog._id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{blog.title}</TableCell>
                      <TableCell>{blog.excerpt}</TableCell>
                      <TableCell>{blog.authorId}</TableCell>
                      <TableCell>{formatDate(blog.publishedDate)}</TableCell>

                      <TableCell>
                        <span
                          className={` text-white px-4 py-1 rounded-full uppercase ${badgeColor(blog.isPublished)}`}
                        >
                          {blog.isPublished ? "published" : "Draft"}
                        </span>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan="6" className="text-center">
                    You do not have any blogs
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Blogs;
