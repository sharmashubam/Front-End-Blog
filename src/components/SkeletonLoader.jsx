import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <div className="w-full sm:w-64 bg-gray-300 h-10 sm:h-12 rounded-lg mb-3 sm:mb-6"></div>
      <div className="w-full sm:w-48 bg-gray-300 h-8 sm:h-10 rounded-lg mb-3 sm:mb-6"></div>
      <div className="w-full sm:w-32 bg-gray-300 h-6 sm:h-8 rounded-lg mb-3 sm:mb-6"></div>
      <div className="w-full sm:w-40 bg-gray-300 h-6 sm:h-8 rounded-lg mb-3 sm:mb-6"></div>
      <div className="w-full sm:w-60 bg-gray-300 h-6 sm:h-8 rounded-lg"></div>
    </div>
  );
};

export default SkeletonLoader;
