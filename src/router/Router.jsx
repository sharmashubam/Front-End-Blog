import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Posts from "../components/post/Posts";
import SoloPost from "../components/post/SoloPost";
import Signin from "../components/Signin";

import { contextapi } from "../context/contextapi";
const Router = () => {
  const { loggedIn, soloPost } = useContext(contextapi);
  return (
    <Routes>
      {loggedIn === false && (
        <>
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
        </>
      )}
      <Route path="/" element={<Posts />} />
      {soloPost && <Route path="/post" element={<SoloPost />} />}
      
    </Routes>
  );
};

export default Router;
