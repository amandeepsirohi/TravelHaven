import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function PhotoUploader({addedPhotos , onChange})
{   

    const [photoLInk , setPhotoLink] = useState('');
    async function addPhotoByLink(ev)
  { ev.preventDefault();
    const {data:filename} = await axios.post('/upload-by-link' , {link : photoLInk});
    onChange(prev => {
        return[...prev , filename];
    });
    setPhotoLink('');
  }

  function uploadPhoto(ev)
  {
    const files = ev.target.files;
    const data = new FormData();
    for(let i = 0 ; i < files.length ; i++)
    {
        data.append('photos' , files[i]);
    }
    axios.post('/upload' , data , {
        headers : {'Content-Type' : 'multipart/form-data'}
    }).then(response => {
        const {data:filenames} = response;
        onChange(prev => {
        return[...prev , ...filenames];
    });
    });

  }
  function removePhoto(ev,filename) {
    ev.preventDefault();
    onChange([...addedPhotos.filter(photo => photo !== filename)]);
  }

  function selectAsMainPhoto(ev , filename)
  {
    ev.preventDefault();
    const addedPhotosWithoutSelected = addedPhotos.filter(photo => photo !== filename);
    const newAddedPhotos = [filename , ...addedPhotosWithoutSelected];
    onChange(newAddedPhotos);
  }

    return (
        <>
        <div className="mt-[1px] flex gap-2">
              <input value={photoLInk} onChange={ev=>setPhotoLink(ev.target.value)} type="text" placeholder="Add using Link? Paste link here"/>
              <button
                onClick={addPhotoByLink}
                type="button"
                className=" flex gap-2 text-white bg-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"/>
                </svg>
                Upload</button>
            </div>
    
            <div
              className=" mt-4 gap-4 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 max-w-screen-xl">
              {addedPhotos.length > 0 && addedPhotos.map(link => (
                <div className=" h-32  flex relative  k" key={link} >
                    <img className=" rounded-2xl w-full object-cover   " src={"http://localhost:4000/uploads/" + link} />
                    
                    <button onClick={ev => removePhoto(ev,link)} className="cursor-pointer absolute bottom-0 right-0 bg-black opacity-80 p-1 rounded-full m-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6  text-white ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  </button>

                    {link === addedPhotos[0]}
                    {
                      <button onClick={ev => selectAsMainPhoto(ev,link)} className="cursor-pointer absolute bottom-0 left-0 bg-black opacity-80 p-1 rounded-full m-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="w-6 h-6 ">
                      <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                      </svg>
                      </button> 
                    }

                    {link != addedPhotos[0] && (
                      <button onClick={ev => selectAsMainPhoto(ev,link)} className="cursor-pointer absolute bottom-0 left-0 bg-black opacity-80 p-1 rounded-full m-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                    </button> 
                    )}

                </div>
              ))}
              <label
                type="button"
                className=" cursor-pointer  flex justify-center items-center  h-32 w-full gap-2 text-black bg-gray-200 font-[300] rounded-lg text-[15px] text-center mr-2 mb-2">
                 <input type="file" multiple className="hidden" onChange={uploadPhoto}/>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BVBU5sCmRaf_BHRMqCwNeRVHUZip2K6WwGBJlgZ-8Nj0UFON6YqD9BDE0ZSspnyunY8&usqp=CAU
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"/>
                </svg>
                Upload from device</label>
</div>
    </>
    );
}