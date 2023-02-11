import React from "react";
import { useContext } from "react";
import { contextapi } from "../context/contextapi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
const LogoutButton = () => {
  const { getLoggeIn } = useContext(contextapi);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await axios.get("http://localhost:5000/auth/logout");
    await getLoggeIn();
    navigate("/");
  };
  return (
    <div>
      <button
        onClick={logoutHandler}
        className="flex justify-center items-center gap-1"
      >
        <div>Logout</div>
        <div>
          <BiLogOut size={20} />
        </div>
      </button>
    </div>
  );
};

export default LogoutButton;
