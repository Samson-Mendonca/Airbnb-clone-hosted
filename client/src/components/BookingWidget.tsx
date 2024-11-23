import {useContext, useEffect, useState} from "react";
import {differenceInCalendarDays} from "date-fns";
import axios from "axios";
import {Navigate} from "react-router-dom";
import {UserContext} from "../../src/UserContext";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

export default function BookingWidget({place}) {
  const [checkIn,setCheckIn] = useState('');
  const [checkOut,setCheckOut] = useState('');
  const [numberOfGuests,setNumberOfGuests] = useState(1);
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [redirect,setRedirect] = useState('');
  const {user} = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setNumberOfGuests(place.maxGuests);
    }
  }, [user]);

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
  }

  async function bookThisPlace() {
    if(user){
      
    
    if(!checkIn ||!checkOut || !name ||(phone.length!==10)){
      alert('Please enter all details correctly to book this place!')
      
    }if(checkIn &&checkOut && name &&(phone.length==10)){
    const response = await axios.post('/booking', {
      checkIn,checkOut,numberOfGuests,name,phone,
      place:place._id,
      price:numberOfNights * place.price,
    });
    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
  }}else{
    alert('You need to login to book a place.')
    
  }
}

  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div className=" shadow-xl  p-4 rounded-2xl border-neutral-200 border-[2px]">
      <div className="text-2xl text-center">
        Price: ₹{place.price} / night
      </div>
      <div className=" rounded-2xl mt-4">
        <div className="flex">
          <div className="py-3 px-4">
            <Label>Check in:</Label>
            <Input type="date"
                   value={checkIn}
                   onChange={ev => setCheckIn(ev.target.value)}/>
          </div>
          <div className="py-3 px-4 border-l">
            <Label>Check out:</Label>
            <Input type="date" value={checkOut}
                   onChange={ev => setCheckOut(ev.target.value)}/>
          </div>
        </div>
        <div className="py-3 px-4 border-t">
          <Label>Number of guests:</Label>
          <Input type="number"
                 value={numberOfGuests}
                 onChange={ev => setNumberOfGuests(ev.target.value)}/>
        </div>
        {numberOfNights > 0 && (
          <div className="py-3 px-4">
            <Label>Your full name:</Label>
            <Input type="text"
                   value={name}
                   onChange={ev => setName(ev.target.value)}/>
            <Label>Phone number:</Label>
            <Input type="tel"
                   value={phone}
                   onChange={ev => setPhone(ev.target.value)}/>
                   <p className=" font-semibold mt-5">Total for {numberOfNights} nights : ₹{numberOfNights * place.price}</p>
          </div>
        )}
      </div>
      <button onClick={bookThisPlace} className="bg-rose-600 hover:bg-rose-700  rounded-2xl py-2 px-4 text-white w-full text-xl mt-4">
        Reserve
        {numberOfNights > 0 && (
          <span>  ₹{numberOfNights * place.price}</span>
        )}
      </button>
    </div>
  );
}