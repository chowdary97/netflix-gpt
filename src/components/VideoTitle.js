import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-16 absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-white text-black px-16 py-2 text-xl  rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-200 text-black px-16 py-2 text-xl  rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
