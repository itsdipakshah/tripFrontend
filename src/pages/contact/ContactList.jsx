import React, { useState } from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import useApi from '@/hooks/useApi';
import { formatDate } from '@/lib/FormatData';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import api from '@/api/axios';
import { toast } from 'sonner';

const ContactList = () => {
    const [dependency ,setDependency] = useState(0);
     const { data, error, loading } = useApi("/contacts",{},[dependency]);

    const badgeColor = (status) =>{
        switch(status){
            case "pending":
                return "bg-orange-500";

            case "resolved":
                return "bg-green-500";
        }
    }

    if(loading){
        return <div>Loading...</div>
    }

    const handleStatusChange =async(contactId ,newStatus)=>{
         try {
      const response =await api.put(`/contacts/${contactId}`,{status:newStatus});
      console.log(response);

      if(response.status === 200){
        toast.success("Contact status updated");
        setDependency(prav=>prav+1)
        
      }else{
        toast.error("Failed to update status message ")
      }
    } catch (error) {
      console.error("status update failed",error)
     toast.error("failed ,Try again")
    }
  };
    

  return (
     <main className="px-20 py-8">
            <Card>
                <CardHeader className="border-b">
                    <CardTitle>Contact List</CardTitle>
                    <CardDescription>Show all your client messages for trip.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableCaption>A list of your recent Contacts.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>S.N.</TableHead>
                                <TableHead className="w-[100px]">Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Message</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className={"text-right"}>Actions</TableHead>

                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                data && data.length == 0 
                                ?
                                <div>You do not have any messages</div>
                                :
                                data.map((contacts, index)=>{
                                    return (
                                    <TableRow key={contacts._id}>
                                        <TableCell>{index+1}</TableCell>
                                        <TableCell>{contacts.name}</TableCell>
                                        <TableCell>{contacts.email}</TableCell>
                                        <TableCell>{contacts.message}</TableCell>
                                       
                                       
                                        <TableCell>
                                            <span className={` ${badgeColor(contacts.status)} text-white px-4 py-1 rounded-full uppercase`}>{contacts.status}</span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {
                                                contacts.status === "pending" ? 
                                                <Button variant='outline' size='sm' onClick={()=>{handleStatusChange(contacts._id ,"resolved")}}>
                                                    Mark as Resolved
                                                </Button>
                                                :
                                               <Button variant='outline' size='sm' onClick={()=>{handleStatusChange(contacts._id ,"pending")}}>
                                                    Mark as Pending
                                                </Button>
                                            }

                                        </TableCell>
                                    </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </main>
  )
}

export default ContactList