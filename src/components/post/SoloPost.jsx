import React from "react";
import { useContext } from "react";
import { contextapi } from "../../context/contextapi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import From from "../form/From";

const SoloPost = () => {
  const { soloPost } = useContext(contextapi);
  const { setCurrentId, getData, loggedIn, setPostData, setAuthError } =
    useContext(contextapi);
  const navigate = useNavigate();
  const editHandler = () => {
    if (soloPost?._id) setCurrentId(soloPost?._id);
    setPostData(soloPost);
  };
  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:5000/posts/${soloPost?._id}`);
      await getData();
      navigate("/");
    } catch (err) {
      setAuthError(err.response.data.message);
    }
  };
  return (
    <div>
      <div>
        <div className="w-[400px] h-[400px] object-cover border">
          <img
            className="w-full h-full"
            src={soloPost?.selectedFile}
            alt={soloPost?.title}
          />
        </div>
        {soloPost?.user === loggedIn.user && (
          <div
            onClick={editHandler}
            className="w-full border text-center mt-2 px-2 py-1  hover:cursor-pointer"
          >
            Edit this post
          </div>
        )}
      </div>
      {soloPost?.user === loggedIn.user && (
        <div
          className="hover:cursor-pointer text-xl px-4 py-2 text-center  border"
          onClick={deleteHandler}
        >
          Delete the post
        </div>
      )}

      <div >
        {soloPost?.message }
      </div>
      <From />
    </div>
  );
};

export default SoloPost;
