import React from "react";
import VideoGridItem from "../Feed/VideoGridItem";

export default function RelatedVids({ vids }) {
  console.log(vids);

  return (
    <ul className="flex flex-col space-y-2">
      {vids.map((video) => (
        <VideoGridItem video={video} key={video.id} />
      ))}
    </ul>
  );
}
