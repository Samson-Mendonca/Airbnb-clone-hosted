import axios from "axios";
import { useEffect, useState } from "react";
import AccountNav from "./AccountNav";
import { differenceInCalendarDays, format } from "date-fns";
import { Link } from "react-router-dom";

export default function BookingsPage() {
  const [Bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get('/bookings').then(
      response =>{
        setBookings(response.data);
       

      }
    )
  }, []);
  return (
    
    <>
    <AccountNav/>
    <div>
    {Bookings?.length >0 && Bookings.map((booking)=>(
        <div  
        className=" flex gap-4 bg-gray-200 rounded-2xl overflow-hidden mb-2">
          <div className="w-48">
            
            {booking.place.photos.length > 0 &&(
                                  <img  className="  object-cover rounded-3xl" src={'http://localhost:4000/uploads/'+booking.place.photos[0]} alt=""/>

            )}
          </div>
          <div className="py-3 grow">
          <h2 className="text-2xl font-bold">{booking.place.title}</h2>
          <div className=" font-semibold mt-1 text-lg">
          From: {format(new Date(booking.checkIn),'dd-MM-yyyy' ) } &rarr; {format(new Date(booking.checkOut),'dd-MM-yyyy' ) }
          </div>
          <div className=" text-sm">
           {differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))} nights:
             | Total price: ₹{booking.price}</div>

            </div>
        </div>
    ))}
    </div> 
    </>
  )
}
