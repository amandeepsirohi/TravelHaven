import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./userContext";

export default function Header() {
  const {user} = useContext(UserContext);
  return (
    <div >

      <header className='flex justify-between  '>
        
        <Link to={'/'} href='' className='flex items-center gap-2'>
         
         <img className="h-9 w-9" src = "https://img.icons8.com/?size=80&id=btyYOaxm2aI5&format=png" />
          <span className='font-bold text-xl'>Aircnc</span>
          
        </Link>
        <div
          className='flex justify-center gap-3 border border-gray-300 shadow-lg rounded-full px-2 py-3'>
          <div className='font-[500]'>Anywhere</div>
          <div className='border-l border-gray-300'></div>
          <div className='font-[500]'>Any week</div>
          <div className='border-l border-gray-300'></div>
          <div className='font-[300]'>Add guests</div>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 bg-primary text-white  p-[2px] rounded-full">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
            </svg>
          </button>
        </div>
        <Link
          to={user?'/account':'/login'}
          className='flex   gap-3 border border-gray-300 shadow-lg rounded-full px-2 py-3'>
          <a href=' '>
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>

          </a>
          <div className='overflow-hidden'>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6  text-white rounded-full bg-gray-500 border-1 border-white ">
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"/>
            </svg>

          </div>
          {!!user && (
          <div>
            {user.name}
          </div>
        )}

        </Link>

      </header>
    </div>
  );
}