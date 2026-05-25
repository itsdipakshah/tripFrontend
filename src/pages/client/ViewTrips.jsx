import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, DollarSign } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useApi from "@/hooks/useApi";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import api from "@/api/axios";
import { toast } from "sonner";
import { formatDate } from "@/lib/FormatData";

const ViewTrips = () => {
  const { data, error, loading } = useApi("/trips");

  if (loading) {
    return <div>Loading....</div>;
  }

  const onSubmit = async( tripId) =>{
  

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const numberOfPeople = document.getElementById("numberOfPeople").value;
   
    const data ={
      email:email,
      phone:phone,
      numberOfPeople:numberOfPeople,
      tripId : tripId
    }

    try {
      const response = await api.post("/bookings", data);

      if(response.status === 201){
        toast.success("Booking created successfully");

      } else{
        toast.error("Faild to create bookings");
      }
    } catch (error) {
      toast.error(error.message || "Failed to create bookings")
      
    }

  }
  return (
    <main className=" px-20 py-8">
      <h1 className="text-3xl font-semibold flex justify-center ">
        Explore the best package of Trip vacation you want.
      </h1>
      <section className="mt-8 grid grid-cols-3 gap-4">
        {data && data.length == 0 ? (
          <div>No trips are availiable</div>
        ) : (
          data.map((trip, index) => {
            return (
              <Card key={trip._id || index}>
                <CardHeader className={"border-b flex justify-center items-center flex-col"}>
                  <div>
                    <img
                      src={trip.imageUrl}
                      alt="tripsImage"
                      className="rounded-md w-auto h-full object-cover "
                    />
                  </div>
                  <CardTitle>{trip.title}</CardTitle>
                  <CardDescription>{trip.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-4 space-y-4">
                    {/* Details Grid */}
                    <div className="space-y-2">
                      {/* Location and Date */}
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <span className="text-foreground">{trip.location}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <span className="text-foreground">
                          {formatDate(trip.startTime)}
                        </span>
                      </div>

                      {/* Duration and Availability */}
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground">
                            Duration:
                          </span>
                          <span className="font-medium text-foreground">
                            {trip.duration.days}D/{trip.duration.nights}N
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <span
                            className={
                              trip.availableSeats === 0
                                ? "text-red-500 font-medium"
                                : "text-foreground"
                            }
                          >
                            {trip.availableSeats} left
                          </span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-foreground">
                          रू {trip.price}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          per person
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" className={"w-full"}>
                        Book Trips
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Enter Contact Details</DialogTitle>

                      <DialogDescription>
                        Please Provide your contact details and number to
                        participates to book this trips
                      </DialogDescription>
                      </DialogHeader>
                      <form>
                        <div className="space-y-2 mb-4">
                          <Label  htmlFor="email">Email</Label>
                          <Input id="email" placeholder="example@email" type={"email"} />
                        </div>
                        <div  className="space-y-2 mb-4">
                          <Label  htmlFor="phone">Phone</Label>
                          <Input id="phone" placeholder="98XXXXXXXX"  />
                        </div>
                        <div  className="space-y-2 mb-4">
                          <Label  htmlFor="numberOfPeople">numberOfPeople</Label>
                          <Input id="numberOfPeople" placeholder="20" type={"number"} />
                        </div>

                        <Button type="button" onClick={() => onSubmit(trip._id)} className={"w-full"}>
                          Confirm
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            );
          })
        )}
      </section>
    </main>
  );
};

export default ViewTrips;
