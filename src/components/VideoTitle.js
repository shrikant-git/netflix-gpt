import { useEffect } from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="p-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white p-4 px-12 text-lg text-black rounded-lg mx-2 hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 p-4 px-12 text-lg text-white bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
