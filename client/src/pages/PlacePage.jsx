import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";
import Header from '../Header';
import Perks from '../Perks';

export default function PlacesPage() {
  const {id} = useParams();
  const [place,
    setPlace] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    }

    axios
      .get('/places/' + id)
      .then(response => {
        setPlace(response.data);
      });

  }, [id]);

  if (!place) 
    return '';
  
 

  return (
    <div className="mt-0 flex-col items-center justify-center lg:px-[300px] rounded-4xl">
      <Header />
      <h1 className="text-[35px] font-[400] mt-7 ">{place.title}</h1>
      
      <AddressLink>{place.address}</AddressLink>

      <PlaceGallery place={place}  />


      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] mt-8 gap-[80px]">
        <div className="text-[16px]">
        <div className="my-4">
        <h1 className="mt-4 mb-1 text-[19px] font-[600]">Description</h1>
        {place.description}
      </div>

          <span className="font-[500]">Check-in</span> : {place.checkIn}
          <br/>
          <span className="font-[500]">Check-out</span> : {place.checkOut}
          <br/>
          <span className="font-[500]">Max-Guests</span> : {place.maxGuests}

          <h1 className="mt-4 mb-1 text-[19px] font-[600]">Extra Info</h1>
          <div className=" rounded-2xl shadow-md text-left" >{place.extraInfo}</div>
          <div>
          {place.perks
            ?.[0] && (
              <div >
               {/* //////// */}
              </div>
            )}
          </div>
        </div>
        <div>
            <BookingWidget place={place}/>
        </div>
      </div>
    </div>
  )

}