import { useState } from "react";

export default function PlaceGallery({place})
{      
    const [showAllPhotos,
    setShowAllPhotos] = useState(false);
    if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-white    h-screen">

        <div className="p-8 grid gap-5 justify-center align-center  bg-white  ">
          <div className="mb-[49px]">
            <h2 className="text-[30px] text-black font-[600]">All Photos of {place.title}</h2>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="fixed text-white   shadow shadow-black flex font-[600] gap-1 bg-black rounded-2xl p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ">
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clip-rule="evenodd"/>
              </svg>
              Close photos</button>
          </div>
          {place
            ?.photos.length > 0 && place
              .photos
              .map(photo => (
                <div >
                  <img className="rounded-2xl w-full shadow-none transition-shadow duration-500 ease-in-out hover:shadow-lg hover:shadow-black/30 dark:hover:shadow-black/30" src={'http://localhost:4000/uploads/' + photo}/>
                </div>
              ))}
        </div>
      </div>
    );
  }
    return (
        <div
        className="grid gap-2 grid-cols-[2fr_1fr] mt-5 rounded-3xl overflow-hidden shadow shadow-black">
        <div>
          {place.photos
            ?.[0] && (
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  className=" aspect-square object-cover transition duration-300 ease-in-out hover:scale-110  "
                  src={'http://localhost:4000/uploads/' + place.photos[0]}/>
              </div>
            )}
        </div>

        <div className="relative">
          <div className="grid  ">
            {place.photos
              ?.[1] && (<img
                className="aspect-square object-cover  "
                src={'http://localhost:4000/uploads/' + place.photos[1]}/>)}
            <div className=" overflow-hidden">
              {place.photos
                ?.[2] && (<img
                  className="aspect-square object-cover relative top-2"
                  src={'http://localhost:4000/uploads/' + place.photos[2]}/>)}
            </div>
          </div>
          <button
            onClick={() => setShowAllPhotos(true)}
            className="flex gap-1 absolute bottom-0 right-0 text-gray-700 bg-gray-300 px-4 rounded-md m-2 p-1 border-[1px] border-black ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"/>
            </svg>
            Show more</button>
        </div>
      </div>
    );
}