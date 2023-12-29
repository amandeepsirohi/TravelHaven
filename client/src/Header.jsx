import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./userContext";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <header className="flex justify-between  ">
        <Link to={"/"} href="" className="flex items-center gap-2">
          <img
            className="h-9 w-9"
            src="https://img.icons8.com/?size=80&id=btyYOaxm2aI5&format=png"
          />
          <span className="font-bold text-xl">Aircnc</span>
        </Link>
        <div className="flex justify-center gap-2 border border-gray-300 shadow-lg  rounded-full px-2 py-3 lg:ml-[227px] md:ml-6">
          <div className="font-[500]">Anywhere</div>
          <div className="border-l border-gray-300"></div>
          <div className="font-[500]">Any week</div>
          <div className="border-l border-gray-300"></div>
          <div className="font-[300]">Add guests</div>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" h-6  bg-indigo-500 text-white  p-[2px] rounded-full">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="flex lg:gap-9 md:gap-3">
            <span className="mt-[3px] font-semibold text-indigo-900 text-sm">Aircnc Your Home</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="h-5 mt-1 lg:mr-4">
              <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
            </svg>
          </div>
          <Link
            to={user ? "/account" : "/login"}
            className="flex   gap-3 border border-gray-300 shadow-lg rounded-full px-2 py-2">
            <a href=" ">
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </a>
            <div className="overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6  text-white rounded-full bg-gray-500 border-1 border-white ">
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {!!user && <div>{user.name}</div>}
          </Link>
        </div>
      </header>
    </div>
  );
}
