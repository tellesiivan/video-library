import React from "react";
import VideoPlayer from "./VideoPlayer";
import VidInfo from "./VidInfo";

export default function VdetailsLayout({ vInfo }) {
  return (
    <>
      <div className="flex flex-col w-full h-full space-x-3 md:flex-row ">
        <div className="w-full h-full px-2 py-2 md:w-8/12">
          <VideoPlayer videoSrc={vInfo?.videoFile} />
          <VidInfo info={vInfo} />
        </div>
        <div className="w-full h-full md:flex-1 "></div>
      </div>
    </>
  );
}
