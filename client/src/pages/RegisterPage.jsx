import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Header from "../Header";

export default function RegisterPage() {
  const [name,
    setName] = useState('');
  const [email,
    setEmail] = useState('');
  const [password,
    setPassword] = useState('');

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post('/register', {name, email, password});
      alert("Registration Completed ! you can log in now");
    }
    catch (e)
    {
      alert("Registration failed");
    }

  }

  return (
<div>
    <Header/>
<div className="mt-[420px] grow flex justify-around items-center">
      <div className="-mt-64">
        <h1 className="text-4xl text-center mb-4 font-[450]">Register</h1>
        <form className="max-w-lg mx-auto " onSubmit={registerUser}>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={ev => setName(ev.target.value)}/>
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
          <button className="primary">Register</button>
          <div className="py-2 text-center text-gray-500">
            Already have a account?
            <Link className=" text-black underline " to={'/login'}>
              Login now</Link>
          </div>
        </form>
      </div>
    </div>
</div>
  );
}