import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { contextapi } from "./context/contextapi";
import Router from "./router/Router";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [currentId, setCurrentId] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [postLoader, setPostLoader] = useState(true);
  const [soloPost, setSoloPost] = useState(null);

  const getLoggeIn = async () => {
    await axios
      .get("http://localhost:5000/auth/loggedIn")
      .then((response) => {
        const data = response.data;
        setLoggedIn(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getData = async () => {
    const postResult = await axios.get("http://localhost:5000/posts");
    setAllPosts(postResult.data);
    setPostLoader(false);
  };

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
    user: "",
  });

  useEffect(() => {
    getLoggeIn();
    getData();
  }, []);

  return (
    <contextapi.Provider
      value={{
        postData,
        setPostData,
        loggedIn,
        getLoggeIn,
        getData,
        allPosts,
        setCurrentId,
        currentId,
        setAuthError,
        authError,
        postLoader,
        setSoloPost,
        soloPost
      }}
    >
      <Navbar />
      <Router />
    </contextapi.Provider>
  );
}

export default App;
