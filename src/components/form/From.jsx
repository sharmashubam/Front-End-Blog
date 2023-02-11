import React, { useState } from "react";
import { useContext } from "react";
import FileBase from "react-file-base64";
import { contextapi } from "../../context/contextapi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const From = () => {
  const location = useLocation();
  const { postData, setPostData, setCurrentId, currentId } =
    useContext(contextapi);
  const { getData, loggedIn } = useContext(contextapi);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentId !== null) {
        setLoader(true);
        await axios.patch(`http://localhost:5000/posts/${currentId}`, postData);

        await getData();
        setLoader(false);
        clear();
        navigate("/");
        setCurrentId(null);
      }
      if (currentId === null) {
        setLoader(true);
        await axios.post("http://localhost:5000/posts", postData);
        await getData();
        setLoader(false);
        clear();
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      setLoader(false);
    }
  };

  const clear = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  useEffect(() => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
    setCurrentId(null)
  }, [location.pathname==='/post',setPostData]);

  return (
    <div>
      {loggedIn !== false && (
        <>
          <form onSubmit={submitHandler} className="flex flex-col">
            <input
              onKeyDown={handleKeyDown}
              value={postData.creator}
              placeholder="Creator's name"
              onChange={(e) =>
                setPostData({ ...postData, creator: e.target.value })
              }
            />
            <input
              onKeyDown={handleKeyDown}
              value={postData.title}
              placeholder="Title"
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />

            <input
              onKeyDown={handleKeyDown}
              value={postData?.message}
              placeholder="Message"
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
            />

            <input
              onKeyDown={handleKeyDown}
              value={postData.tags}
              placeholder="tags"
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value.split(",") })
              }
            />

            <div>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({
                    ...postData,
                    selectedFile: base64,
                    user: loggedIn?.user,
                  })
                }
              />
            </div>
            {!loader && (
              <button type="submit">
                {currentId === null ? "Create" : "Edit"}
              </button>
            )}
          </form>
          <button className="mt-4 border text-xl px-4 py-2" onClick={clear}>
            Clear
          </button>
        </>
      )}
    </div>
  );
};

export default From;
