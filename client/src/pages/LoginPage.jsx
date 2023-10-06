import {useContext, useState} from "react";
import {Link, Navigate} from "react-router-dom";
import axios from "axios";
import { UserContext } from "../userContext";
import Header from "../Header";

export default function LoginPage() {
  const [email,
    setEmail] = useState('');
  const [password,
    setPassword] = useState('');
  const [redirect  , setRedirect] = useState(false);
  
 const {setUser} =  useContext(UserContext);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const {data} = await axios.post('/login', { email, password} );
      setUser(data);
      alert("Login Successful!");
      setRedirect(true);
    }
    catch (e)
    {
      alert("Login failed failed");
    }

  }
  if(redirect)
  {
    return <Navigate to={'/'} />
  }

  return (
    <div>
    <Header/>
      <div className="mt-[420px] grow flex justify-around items-center">
      <div className="-mt-64 ">
        <h1 className="text-4xl text-center mb-4 font-[450]">Login</h1>
        <form className="max-w-lg mx-auto" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={ev => setEmail(ev.target.value)}/>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}/>

          <button className="primary">Login</button>
          <div className="py-2 text-center text-gray-500">
            Don't have a account?
            <Link className=" text-black underline " to={'/register'}>
              Register now</Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}