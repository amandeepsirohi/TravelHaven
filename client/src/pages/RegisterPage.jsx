import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../Header";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", { name, email, password });
      alert("Registration Completed ! you can log in now");
    } catch (e) {
      alert("Registration failed");
    }
  }

  return (
    <div>
      {/* <Header/>
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
    </div> */}
      <Header />
      <section class="mt-6 flex flex-col md:flex-row h-screen items-center">
        <div class="bg-white hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src="https://images.unsplash.com/photo-1553369728-15ec6971afaf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            class="w-full h-[91%] object-cover"
          />
        </div>

        <div
          class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">
          <div class="w-full h-100">
            <h1 class="text-xl md:text-2xl font-bold leading-tight -mt-[120px]">
              Register to explore!
            </h1>

            <form class="mt-6" onSubmit={registerUser}>
              <div>
                <label class="block text-gray-700">Username</label>
                <input
                  type="text"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                  placeholder="Enter Username"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  required
                />
              </div>
              <div className="mt-4">
                <label class="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  placeholder="Enter Email Address"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  required
                />
              </div>

              <div class="mt-4">
                <label class="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                  placeholder="Enter Password"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">
                 Register
              </button>
            </form>

            <hr class="my-6 border-gray-300 w-full" />

            <div className="py-2 text-center text-gray-500">
              Already have a account?{"  "}
              <Link className=" text-black  " to={"/login"}>
                {" "}
                <span className="text-indigo-900 font-semibold">
                  Login Now
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
