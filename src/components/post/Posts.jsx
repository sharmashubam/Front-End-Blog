import { useContext } from "react";
import { contextapi } from "../../context/contextapi";
import Post from "./Post";
import { useNavigate } from "react-router-dom";
import From from "../form/From";
const Posts = () => {
  const { allPosts, postLoader, setSoloPost } = useContext(contextapi);

  const soloPostHandler = (item) => {
    setSoloPost(item);
    navigate("/post");
  };
  const navigate = useNavigate();
  return (
    <>
      {postLoader ? (
        <>Loading....</>
      ) : (
        <>
          <div className="flex flex-col gap-4 p-2 xl:w-[55%] w-full md:w-[70%] mx-auto">
            {allPosts.length && (
              <>
                {allPosts.map((item) => {
                  return (
                    <div
                      key={item._id}
                      onClick={() => {
                        soloPostHandler(item);
                      }}
                    >
                      <Post item={item} />
                    </div>
                  );
                })}
              </>
            )}
          </div>
          <From />
        </>
      )}
    </>
  );
};

export default Posts;
