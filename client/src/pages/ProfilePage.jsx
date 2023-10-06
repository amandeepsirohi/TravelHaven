import {useContext, useState} from "react";
import {UserContext} from "../userContext";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {Navigate} from "react-router-dom";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";
import Footer from "../Footer";

export default function ProfilePage() {
  const {ready, user, setUser} = useContext(UserContext);

  const [redirect,
    setRedirect] = useState(null);

  async function logout() {
    await axios.post('/logout');
    setRedirect('/');
    setUser(null);
  }

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={'/login'}/>
  }

  let {subpage} = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }

  

  if (redirect) {
    return <Navigate to={redirect}/>
  }
  return (

    <div className="h-[90vh]">
      <AccountNav />
      {subpage === 'profile' && (
        <div className="text-center mt-9 mx-auto">
          Logged in as  <span >{user.name}</span>
          <br/>
          <button
            onClick={logout}
            className="bg-primary w-[15%] mt-2 py-2 px-6 rounded-full text-white">LogOut</button>
        </div>
      )}
      {subpage === 'places' && (<PlacesPage/>)}

    </div>
  );
}