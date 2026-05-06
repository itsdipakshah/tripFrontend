import api from "@/api/axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useApi from "@/hooks/useApi";
import { Edit, Eye, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Trips = () => {

    const [dependency ,setDependency] = useState(0);
  function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toDateString();
  }
  const navigate = useNavigate();

  const { data, error, loading } = useApi("/trips", {} ,[dependency]);

  if (loading) {
    return <div>Loaging...</div>;
  }

  const handleDelete = async (tripId) => {
    try {
      const response = await api.delete(`/trips/${tripId}`);
      console.log(response);
      if (response.status === 200) {
        toast.success("Trip deleted successfully!");
        setDependency(prev => prev+1)
      } else {
        toast.error("Failed to delete trips,Try again");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "An error occured while deleting trips");
    }
  };

  return (
    <main className="px-20 py-8">
      <Card>
        <CardHeader className={"border-b"}>
          <CardTitle className={"text-3xl"}>Trips Page</CardTitle>
          <CardDescription>View and Manage the trips,</CardDescription>
          <CardAction>
            <Button
              onClick={() => {
                navigate("/trips/add");
              }}
            >
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
              {
              data && data.length == 0 ?
              <div className="text-center py-10">No trips found , Please add new trips</div>
              :
              data.map((trip, index) => {
                return (
                  <TableRow key={trip._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className={"uppercase"}>{trip.title}</TableCell>
                    <TableCell>{trip.location}</TableCell>
                    <TableCell>{formatDate(trip.startTime)}</TableCell>
                    <TableCell>₹ {trip.price}</TableCell>
                    <TableCell className={"space-x-1"}>
                      <Button
                        size="icon"
                        variant="outline"
                        className={"text-blue-600 hover:bg-blue-300"}
                      >
                        <Eye />
                      </Button>
                      <Button
                      onClick={()=>{navigate(`/trips/update/${trip._id}`)}}
                        size="icon"
                        variant="outline"
                        className={"text-green-500 hover:bg-green-300"}
                      >
                        <Edit />
                      </Button>
                      <Button
                        onClick={() => {
                          handleDelete(trip._id);
                        }}
                        size="icon"
                        variant="outline"
                        className={"text-red-500 hover:bg-red-300"}
                      >
                        <Trash2 />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
};

export default Trips;
