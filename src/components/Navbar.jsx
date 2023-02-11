import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { contextapi } from "../context/contextapi";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const { loggedIn } = useContext(contextapi);
  return (
    <div className="shadow-md w-full">
      <div className="w-full xl:w-[60%] md:w-[70%]  mx-auto">
        <div className="flex justify-between items-center px-4 pt-4 pb-3">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl">
              <Link to='/' className="text-transparent bg-clip-text bg-gradient-to-r to-[#000300] from-gray-500">
                yourBlogs
              </Link>
            </h1>
          </div>
          <div>
            {loggedIn === false && (
              <div className="flex gap-4">
                <Link
                  className="hover:scale-110 transition-all duration-300 hover:font-medium ease-in-out"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="hover:scale-110 transition-all duration-30000 ease-in-out"
                  to="/signin"
                >
                  Signin
                </Link>
              </div>
            )}
            {loggedIn !== false && <LogoutButton />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
