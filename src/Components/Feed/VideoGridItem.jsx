import React from "react";
import VideoCard from "../../helpers/create/VideoCard";
import { Link } from "react-router-dom";

export default function VideoGridItem({ video }) {
  return (
    <li className="relative">
      <div className="block w-full h-48 overflow-hidden transition duration-700 ease-in-out rounded-lg cursor-pointer group aspect-w-10 aspect-h-7 ">
        <VideoCard videoSrc={video.videoFile} />
      </div>
      <Link to={`v/${video.id}`}>
        <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none dark:text-white">
          {video.title}
        </p>
        <p className="block text-xs text-gray-500 pointer-events-none">
          {video.category.name}
        </p>
      </Link>
    </li>
  );
}
