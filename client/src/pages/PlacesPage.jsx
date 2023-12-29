import { Link, useParams } from "react-router-dom";
import PlacesFormPage from "./PlacesFormPage";
import AccountNav from "../AccountNav";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import PlaceImg from "../PlaceImg";
import Header from "../Header";
import Footer from "../Footer";

export default function PlacesPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/user-places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <AccountNav />

      <div className="text-center mt-10">
        <Link
          to={"/account/places/new"}
          className="inline-flex gap-1 bg-indigo-500 rounded-full px-6 py-2 text-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add new place
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-3 w-[100%] ml-[6px] gap-4 px-[70px]">
        {places.length > 0 &&
          places.map((place) => (
            <Link
              to={"/account/places/" + place._id}
              className="flex cursor-pointer gap-5 bg-gray-200 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 rounded-2xl  ">
              <div className="flex w-32 h-32  shrink-0">
                <PlaceImg place={place}  />
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-[23px] font-[450]">{place.title}</h2>
                <p className="text-gray-700">{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
