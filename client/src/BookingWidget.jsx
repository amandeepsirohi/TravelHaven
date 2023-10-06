import {useContext, useEffect, useState} from "react";
import {differenceInCalendarDays} from "date-fns";
import axios from "axios";
import {Navigate} from "react-router-dom";
import { UserContext } from './userContext';

export default function BookingWidget({place}) {
  const [checkIn,
    setCheckIn] = useState('');
  const [checkOut,
    setCheckOut] = useState('');
  const [numberOfGuests,
    setNumberOfGuests] = useState(1);

  const [name,
    setName] = useState('');
  const [phone,
    setPhone] = useState('');

    const [redirect,setRedirect] = useState('');
    const {user} = useContext(UserContext);
    
    useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
  }

  async function bookThisPlace() {
    const response = await axios.post('/bookings', {
      checkIn,checkOut,numberOfGuests,name,phone,
      place:place._id,
      price:numberOfNights * place.price,
    });
    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div className="bg-white shadow-lg p-4 rounded-2xl shadow-gray-500">
      <div className="text-2xl text-center font-[500]">
        Price : ₹{place.price}
        / per-night
      </div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="px-3 py-4">
            <label>Check in:
            </label>
            <input
              value={checkIn}
              onChange={ev => setCheckIn(ev.target.value)}
              type="date"/>
          </div>
          <div className="px-3 py-4 border-l">
            <label>Check out:
            </label>
            <input
              value={checkOut}
              onChange={ev => setCheckOut(ev.target.value)}
              type="date"/>
          </div>

        </div>
        <div className="px-3 py-4 border-t">
          <label>Total guests:
          </label>
          <br/>
          <input
            value={numberOfGuests}
            onChange={ev => setNumberOfGuests(ev.target.value)}
            // className="px-3 py-3 remove-arrow rounded-2xl bg-gray-100"
            type="number"/>
        </div>
        {numberOfNights > 0 && (
          <div className="px-3 py-4 border-t">
            <label>Your name:
            </label>
            <br/>
            <input
              value={name}
              onChange={ev => setName(ev.target.value)}
              className="px-3 py-3 remove-arrow rounded-2xl bg-gray-100"
              type="text "/>
            <br/>
            <label>Phone number:
            </label>
            <br/>
            <input
              value={phone}
              onChange={ev => setPhone(ev.target.value)}

              type="tel"/>
          </div>
        )}
      </div>
      <button onClick={bookThisPlace} className="primary">Book this place</button>
      {numberOfNights > 0 && (
        <span className="px-2">₹{numberOfNights * place.price}</span>
      )}
    </div>
  );
}