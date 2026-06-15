import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import BlogForm from '@/components/common/BlogForm'

const Addblog = () => {
  return (
    <Card className="w-2/5 mx-auto my-14">
        <CardHeader className="justify-center">
            <CardTitle>
                Add New Blog
            </CardTitle>
            <CardDescription >
                Create a new blog and share it with your friends!
            </CardDescription>
        </CardHeader>
        <CardContent>
         <BlogForm/>
        </CardContent>
    </Card>
  )
}

export default Addblog