import AccountNav from "../AccountNav";
import {useEffect, useState} from "react";
import axios from "axios";
import PlaceImg from "../PlaceImg";
import {differenceInCalendarDays, format} from "date-fns";
import {Link} from "react-router-dom";
import Footer from "../Footer";



export default function BookingsPage() {
  const [bookings ,setBookings] = useState([]); 
  useEffect(()=>{
    axios.get('/bookings').then(response => {
      setBookings(response.data);
    });
  }, []);
  return (
    <div >
      <AccountNav/>
      <div className="px-[90px] grid grid-cols-2 gap-1">
        {bookings?.length > 0 && bookings.map(booking => (
          <Link to={`/account/bookings/${booking._id}`} className="flex  gap-4 bg-gray-200 mt-10 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden"> 
            <div className="w-48 ">
              <PlaceImg place={booking.place} />
            </div>
            <div className="py-3">
            <h2 className="text-xl">{booking.place.title}</h2>
            <div>
            {format(new Date(booking.checkIn) , 'dd-MM-yyyy') } &rarr; {format(new Date(booking.checkOut) , 'dd-MM-yyyy')}
            </div>
            <div>
              Number of nights : {differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))}
              <br/>
              Total Price : ₹{booking.price}
            </div>
            </div>
          </Link>
        )) }
      </div>
    </div>
  );
}