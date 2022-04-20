import React from "react";
import VideoGridItem from "./VideoGridItem";

export default function VideoGrid({ videos }) {
  console.log(videos);

  return (
    <div className="py-4 mx-2 md:mx-4">
      <ul className="grid grid-cols-1 gap-x-2 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 ">
        {videos.map((video) => (
          <VideoGridItem key={video.id} video={video} />
        ))}
      </ul>
    </div>
  );
}
