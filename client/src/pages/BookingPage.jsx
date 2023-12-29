import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PlaceGallery from '../PlaceGallery';
import AddressLink from "../AddressLink";
import {differenceInCalendarDays, format} from "date-fns";
import Header from "../Header";

export default function BookingPage()
{   
    const {id} = useParams();
    const [booking , setBooking] = useState(null);
    useEffect(() => {
        if(id)
        {
            axios.get('/bookings').then(response => {
                const foundBooking = response.data.find(({_id}) => _id === id );
                if(foundBooking)
                {
                    setBooking(foundBooking);
                }
            });
        }
    } , [id]);

    if(!booking)
    {
        return '';
    }

    return (
        <div className=" flex-col items-center justify-center lg:px-[300px] rounded-4xl" >
        <Header/>
      <div className="mt-10">
      <h1 className="text-3xl mb-1">{booking.place.title}</h1>
      <AddressLink className="my-2 block">{booking.place.address}</AddressLink>
      <div className="bg-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between">
        <div>
          <h2 className="text-2xl mb-4">Your booking information:</h2>
          {/* <BookingDates booking={booking} /> */}

          <div>
            {format(new Date(booking.checkIn) , 'dd-MM-yyyy') } &rarr; {format(new Date(booking.checkOut) , 'dd-MM-yyyy')}
            </div>
            

        </div>
        <div className="bg-indigo-500 p-6 text-white rounded-2xl">
          <div>Total price</div>
          <div className="text-3xl">${booking.price}</div>
        </div>
      </div>
      <PlaceGallery place={booking.place} />
    </div>
    </div>
  );
}