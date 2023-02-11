import React from "react";
const Post = ({ item }) => {
  return (
    <div>
      <div>
        <div className="w-[400px] h-[400px] object-cover border">
          <img
            className="w-full h-full"
            src={item.selectedFile}
            alt={item.title}
          />
        </div>
      </div>
    </div>
    
  );
};

export default Post;
