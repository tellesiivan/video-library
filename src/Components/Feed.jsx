import React, { useEffect, useState } from "react";
import Skeleton from "../helpers/Skeleton";
import { FetchVideos } from "../utils/FetchVideos";
import TagsTop from "./Feed/TagsTop";
import { useSelector } from "react-redux";
import VideoGrid from "./Feed/VideoGrid";

export default function Feed() {
  // const test = useSelector((state) => state.main.user);
  // console.log(test);
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getVideos() {
      setLoading(true);
      const data = await FetchVideos();
      setVideos(data);
      setLoading(false);
    }
    getVideos();
  }, []);

  return (
    <>
      {/* Header x Tags */}
      {loading ? (
        <Skeleton />
      ) : videos ? (
        <>
          {/* <TagsTop /> */}
          <VideoGrid videos={videos} />
        </>
      ) : (
        <>console.log("show no vid msg")</>
      )}
    </>
  );
}
