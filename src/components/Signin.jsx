import React, { useContext, useState } from "react";
import axios from "axios";
import { contextapi } from "../context/contextapi";
import { Link, useNavigate } from "react-router-dom";
import ErrorPopUp from "./ErrorPopUp";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const navigate = useNavigate();
  const { getLoggeIn,authError,setAuthError} = useContext(contextapi);


  const register = async (e) => {
    e.preventDefault();
    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };

      await axios.post("http://localhost:5000/auth/", registerData);
      await getLoggeIn();
      navigate("/");
    } catch (err) {
      setAuthError(err.response.data.message);
    }
  };

  return (
    <>
    {authError && <ErrorPopUp  />}
    <div className="w-full px-4 mx-auto h-screen mt-[120px] md:w-[50%] xl:w-[20%]">
      <h1 className="text-center font-semibold text-2xl p-2 mt-6">
        Create your account
      </h1>
      <div className="flex items-center justify-center gap-2 mb-4 ">
        Already have an account ?
        <span className="text-[#282829] font-bold">
          <Link to="/login">Login</Link>
        </span>
      </div>

      <div className="flex flex-col w-full ">
        <form onSubmit={register} className="flex flex-col gap-6 px-4">
          <div>
            <label className="p-2">Email</label>
            <input
              className="outline-none border bg-slate-200 border-none p-2 text-lg rounded-md shadow-md w-full placeholder-gray-700"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="p-2">Password</label>
            <input
              className="outline-none border bg-slate-200 border-none p-2 text-lg rounded-md shadow-md w-full placeholder-gray-700"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              type="password"
              placeholder="*******"
            />
          </div>

          <div>
            <label className="p-2">Verify Password</label>
            <input
              className="outline-none border bg-slate-200 border-none p-2 text-lg rounded-md shadow-md w-full placeholder-gray-700"
              onChange={(e) => {
                setPasswordVerify(e.target.value);
              }}
              value={passwordVerify}
              type="password"
              placeholder="*******"
            />
          </div>

          <button
            className="border border-gray-700 font-semibold text-lg px-4 py-1 hover:text-white hover:bg-gray-700 w-[98%] mx-auto"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
    </>
    
  );
};

export default Signin;
