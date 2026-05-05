import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import useApi from '@/hooks/useApi';
import { Edit, Eye, Plus, Trash2 } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Trips = () => {


    function formatDate(isoString){
        const date = new Date (isoString);
        return date.toDateString();

    }
    const navigate = useNavigate();

    const {data ,error , loading} = useApi('/trips');

    if (loading) {
        return <div>Loaging...</div>
    }

  return (
    <main className='px-20 py-8'>
      
       <Card>
        <CardHeader className={"border-b"}>
            <CardTitle className={"text-3xl"}>Trips Page</CardTitle>
            <CardDescription>View and Manage the trips,</CardDescription>
            <CardAction>
                <Button onClick={()=>{navigate("/trips/add")}}>
                <Plus /> Add Trips
                </Button>
                </CardAction>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>S.N</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Start Time</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                { data.map((trip,index)=>{
                        return(
                            <TableRow key={trip._id}>
                                <TableCell>{index+1}</TableCell>
                                <TableCell>{trip.title}</TableCell>
                                <TableCell>{trip.location}</TableCell>
                                <TableCell>{formatDate(trip.startTime)}</TableCell>
                                <TableCell>₹ {trip.price}</TableCell>
                                <TableCell className={"space-x-1"}>
                                    <Button size='icon' variant='outline' className={"text-blue-600 hover:bg-blue-300"}><Eye/></Button>
                                    <Button size='icon' variant='outline' className={"text-green-500 hover:bg-green-300"} ><Edit/></Button>
                                    <Button  size='icon' variant='outline' className={"text-red-500 hover:bg-red-300"}><Trash2/></Button>
                                </TableCell>


                            </TableRow>
                        )
                    })
                
                }
            </TableBody>
          </Table>
        </CardContent>
       </Card>
    </main>
  )
}

export default Trips