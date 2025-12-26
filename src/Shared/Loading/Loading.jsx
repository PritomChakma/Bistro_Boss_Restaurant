import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-base-200">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-neutral rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
