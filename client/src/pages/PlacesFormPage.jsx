import PhotoUploader from "../PhotosUploader";
import Perks from "../Perks";
import { useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import Header from "../Header";

export default function PlacesFormPage() {
  const {id} = useParams();
  const [title,
    setTitle] = useState('');
  const [address,
    setAddress] = useState('');
  const [addedPhotos,
    setAddedPhotos] = useState([]);
  const [description,
    setDescription] = useState('');
  const [perks,
    setPerks] = useState([]);
  const [extraInfo,
    setExtraInfo] = useState('');
  const [checkIn,
    setCheckIn] = useState('');
  const [checkOut,
    setCheckout] = useState('');
  const [maxGuests,
    setMaxGuests] = useState(1);

  const [price , setPrice] = useState(100);

    const [redirect , setRedirect] = useState(false);

    useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/places/'+id).then(response => {
       const {data} = response;
       setTitle(data.title);
       setAddress(data.address);
       setAddedPhotos(data.photos);
       setDescription(data.description);
       setPerks(data.perks);
       setExtraInfo(data.extraInfo);
       setCheckIn(data.checkIn);
       setCheckout(data.checkOut);
       setMaxGuests(data.maxGuests);
       setPrice(data.price);
    });

  }, [id]);

    function inputHeader(text)
  {
    return (
        <h1 className="font-[600] text-2xl mt-5">{text}</h1>
    );
  }

  function inputDescription(text)
  {
    return (
        <p className="text-gray-500 text-[14px] mt-[1px] mb-1">{text}</p>
    );
  }

  function preInput(header , description)
  {
    return (
        <>
        {inputHeader(header)}
        {inputDescription(description)}
    </>
    );
  }

  async function savePlace(ev) {
    ev.preventDefault();
    const placeData = {
      title, address, addedPhotos,
      description, perks, extraInfo,
      checkIn, checkOut, maxGuests,price
    };
    if (id) {
      // update data
      await axios.put('/places', {
        id, ...placeData
      });
      setRedirect(true);
    } else {
      // new place data
      await axios.post('/places', placeData);
      setRedirect(true);
    }

  }
    

  if(redirect)
  {
    return <Navigate to={'/account/places'} />
  }

  return (
    <div >
    {/* <AccountNav/> */}
      <Header />
      <form onSubmit={savePlace} className="px-[70px] mt-[30px]">
        {preInput('Title', 'Crisp and catchy title for your place.')}
        <input
          type="text"
          placeholder="title (name for your apartment)"
          value={title}
          onChange={ev => setTitle(ev.target.value)}/> {preInput('Address', 'Address for this place.')}
        <input
          type="text"
          placeholder="title (name for your apartment) "
          value={address}
          onChange={ev => setAddress(ev.target.value)}/> {preInput('Photos', 'More and better photos make place good.')}

        <PhotoUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>

        <div>

          {preInput('Description', 'Short overview of the place.')}

          <textarea value={description} onChange={ev => setDescription(ev.target.value)}/>
        </div>

        {preInput('Perks', 'Add perks of your place.')}

        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4  mt-4">
          <Perks selected={perks} onChange={setPerks}/>
        </div>

        {preInput('Extra Info', 'Extra Info About Place.')}

        <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)}/> {preInput('Add Check in and check out time', 'Add the time duration and maximum number of guests allowed.')}

        <div className="grid gap-2 grid-cols-2 md:grid-cols-4 ">
          <div>
            <h3 className="mt-1 -mb-1">Check in time</h3>
            <input
              className="bg-gray-200"
              value={checkIn}
              onChange={ev => setCheckIn(ev.target.value)}
              type="text"
              placeholder="12:00:00"/>
          </div>
          <div>
            <h3 className="mt-1 -mb-1">Check out time</h3>
            <input
              className="bg-gray-200"
              value={checkOut}
              onChange={ev => setCheckout(ev.target.value)}
              type="text"
              placeholder="12:00:00"/>
          </div>
          <div>
            <h3 className="mt-1 -mb-1">Max guests</h3>
            <input
              className="bg-gray-200"
              value={maxGuests}
              onChange={ev => setMaxGuests(ev.target.value)}
              type="text"
              placeholder="6"/>
          </div>
          <div>
            <h3 className="mt-1 -mb-1">Price per night</h3>
            <input
              className="bg-gray-200"
              value={price}
              onChange={ev => setPrice(ev.target.value)}
              type="text"
              placeholder="6"/>
          </div>
        </div>
        <div className="mt-10 flex justify-center ">
          <button className="bg-primary text-white rounded-2xl font-[700] px-8 py-4">Save Info</button>
        </div>
      </form>
    </div>
  );
}