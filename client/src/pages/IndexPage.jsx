import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header";
import tt from "./tt.jsx";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
    });
  }, []);
  return (
    <div>
      <Header />
      {/* <p className="border mt-3 "></p> */}
      <hr className="mt-4" />
      <div className="flex justify-between mt-3">
        <div className="hover:underline hover:decoration-slate-900 ">
          <img
            src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
            alt=""
            width="24"
            height="24"
          />
          <p className="text-sm text-slate-700 ">Farms</p>
        </div>
        <div className="hover:underline hover:decoration-slate-900 ">
          <img
            //   class="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_k4_wchqg7 atm_uc_n03lay atm_ui_idpfg4__p88qr9 dir dir-ltr"
            src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
            alt=""
            width="24"
            height="24"
          />
          <p className="text-sm text-slate-700 ">Beach</p>
        </div>
        <div className="hover:underline hover:decoration-slate-900 ">
          <img
            //   class="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_k4_wchqg7 atm_uc_n03lay atm_ui_idpfg4__p88qr9 dir dir-ltr"
            src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
            alt=""
            width="24"
            height="24"
          />
          <p className="text-sm text-slate-700 ">Rooms</p>
        </div>
        <div className="hover:underline hover:decoration-slate-900 ">
          <img
            //   class="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_k4_wchqg7 atm_uc_n03lay atm_ui_idpfg4__p88qr9 dir dir-ltr"
            src="https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg"
            alt=""
            width="24"
            height="24"
          />
          <p className="text-sm text-slate-700 ">Coffee</p>
        </div>
        <div className="hover:underline hover:decoration-slate-900 ">
          <img
            //   class="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_k4_wchqg7 atm_uc_n03lay atm_ui_idpfg4__p88qr9 dir dir-ltr"
            src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
            alt=""
            width="24"
            height="24"
          />
          <p className="text-sm text-slate-700 ">Land</p>
        </div>
        <div className="hover:underline hover:decoration-slate-900 ">
          <img
            //   class="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_k4_wchqg7 atm_uc_n03lay atm_ui_idpfg4__p88qr9 dir dir-ltr"
            src="https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg"
            alt=""
            width="24"
            height="24"
          />
          <p className="text-sm text-slate-700 ">Cottage</p>
        </div>
        <div className="hover:underline hover:decoration-slate-900 ">
          <img
            //   class="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_k4_wchqg7 atm_uc_n03lay atm_ui_idpfg4__p88qr9 dir dir-ltr"
            src="https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
            alt=""
            width="24"
            height="24"
          />
          <p className="text-sm text-slate-700 ">Igloo</p>
        </div>
        <div className="hover:underline hover:decoration-slate-900 ">
          <img
            //   class="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_k4_wchqg7 atm_uc_n03lay atm_ui_idpfg4__p88qr9 dir dir-ltr"
            src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
            alt=""
            width="24"
            height="24"
          />
          <p className="text-sm text-slate-700 ">Pool</p>
        </div>
        <div className="hover:underline hover:decoration-slate-900 ">
          <img
            //   class="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_k4_wchqg7 atm_uc_n03lay atm_ui_idpfg4__p88qr9 dir dir-ltr"
            src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"
            alt=""
            width="24"
            height="24"
          />
          <p className="text-sm text-slate-700 ">Table</p>
        </div>
        <div className="hover:underline hover:decoration-slate-900 ">
          <img
            //   class="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_k4_wchqg7 atm_uc_n03lay atm_ui_idpfg4__p88qr9 dir dir-ltr"
            src="	https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg"
            alt=""
            width="24"
            height="24"
          />
          <p className="text-sm text-slate-700 ">Small</p>
        </div>
        <div className="hover:underline hover:decoration-slate-900 ">
          <img
            //   class="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_k4_wchqg7 atm_uc_n03lay atm_ui_idpfg4__p88qr9 dir dir-ltr"
            src="	https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg"
            alt=""
            width="24"
            height="24"
          />
          <p className="text-sm text-slate-700 ">Domes</p>
        </div>
        <div className="hover:underline hover:decoration-slate-900 ">
          <img
            //   class="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_k4_wchqg7 atm_uc_n03lay atm_ui_idpfg4__p88qr9 dir dir-ltr"
            src="	https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg"
            alt=""
            width="24"
            height="24"
          />
          <p className="text-sm text-slate-700 ">Ski/in</p>
        </div>
        <div className=" flex items-center justify-center gap-3 text-slate-700 text-[15px] border border-slate-400  rounded-lg px-2 py-2">
          <img
            className="h-4"
            src="https://img.icons8.com/ios/50/search--v1.png"
            alt="search--v1"
          />
          Best Places Near You
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-[36px] gap-x-6 gap-y-9  ">
        {places.length > 0 &&
          places.map((place) => (
            <Link to={"/place/" + place._id}>
              <div className="rounded-2xl flex mb-2 ">
                {place.photos?.[0] && (
                  <img
                    className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-2xl object-cover aspect-square "
                    src={"http://localhost:4000/uploads/" + place.photos?.[0]}
                  />
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
