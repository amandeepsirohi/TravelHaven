import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Header from "../Header";

export default function IndexPage()
{   const [places , setPlaces] = useState([]);
    useEffect(() =>{
        axios.get('/places').then(response => {
            setPlaces(response.data );
        });
    } , []);
    return (
        <div>
            <Header />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-[36px] gap-x-6 gap-y-9  " >
            
            {places.length > 0 && places.map(place => (
                <Link to={'/place/' + place._id}>
                    <div className="rounded-2xl flex mb-2 " >
                        {place.photos?.[0] && (
                            <img className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-2xl object-cover aspect-square "  src={'http://localhost:4000/uploads/' + place.photos?.[0]} />
                        )}
                    </div>
                    <h2 className="text-[15px] font-[550] truncate">{place.title}</h2>
                    <p className="text-[14px] text-gray-500">{place.address}</p>
                    <div>
                        <span className="font-[500] text-[15px] ">₹{place.price}</span>
                        <span className="text-[15px] text-gray-500"> Per Night</span>
                    </div>
                </Link>
            ))}
         </div>
        </div>
    );
}
