import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import VidInfo from "./VidInfo";
import { FetchUser } from "../../utils/fetchData";

export default function VdetailsLayout({ vInfo }) {
  const createdBy = vInfo?.uid;
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const u = await FetchUser(createdBy);
      setUser(u);
    }
    getUser();
  }, [createdBy]);

  return (
    <>
      <div className="flex flex-col w-full h-full space-x-3 md:flex-row ">
        <div className="w-full h-full px-2 py-2 md:w-8/12">
          <VideoPlayer videoSrc={vInfo?.videoFile} />
          <VidInfo info={vInfo} user={user && user} />
        </div>
        <div className="w-full h-full md:flex-1 "></div>
      </div>
    </>
  );
}
