import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { contextapi } from "../context/contextapi";
import { Link, useNavigate } from "react-router-dom";
import ErrorPopUp from "./ErrorPopUp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getLoggeIn, setAuthError, authError } = useContext(contextapi);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password,
      };

      await axios.post("http://localhost:5000/auth/login", loginData);

      await getLoggeIn();

      navigate("/");
    } catch (err) {
      setAuthError(err.response.data.message);
    }
  };

  return (
    <>
      {authError && <ErrorPopUp />}
      <div className="w-full px-4 mx-auto h-screen mt-[120px] md:w-[50%] xl:w-[20%]">
        <h1 className="text-center font-semibold text-2xl p-2 mt-6">
          Login to your account
        </h1>
        <div className="flex items-center justify-center gap-2 mb-4 ">
          Don't have an account ?
          <span className="text-[#282829] font-bold">
            <Link to="/signin">Register</Link>
          </span>
        </div>
        <div className="flex flex-col w-full ">
          <form onSubmit={login} className="flex flex-col gap-6 px-4">
            <div className="flex flex-col justify-center items-start p-2">
              <label className="p-2">Email</label>
              <input
                className="outline-none border bg-slate-200 border-none p-2 text-lg rounded-md shadow-md w-full placeholder-gray-700 "
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                type="email"
                placeholder="you@gmail.com"
              />
            </div>
            <div className="flex flex-col justify-center items-start p-2">
              <label className="p-2">Password</label>
              <input
                className="outline-none border bg-slate-200 border-none p-2 text-lg rounded-md shadow-md w-full placeholder-gray-700"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                type="password"
                placeholder="********"
              />
            </div>

            <button
              className="border border-gray-700 font-semibold text-lg px-4 py-1 hover:text-white hover:bg-gray-700 w-[93%] mx-auto"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
