import React, { useEffect, useState } from "react";
import Skeleton from "../helpers/Skeleton";
import { FetchVideos } from "../utils/fetchData";
import TagsTop from "./Feed/TagsTop";
import { useSelector } from "react-redux";
import VideoGrid from "./Feed/VideoGrid";
import NoVidMssg from "../helpers/NoVidMssg";

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
      console.log(data);
      setLoading(false);
    }
    getVideos();
  }, []);

  return (
    <>
      {/* Header x Tags */}
      {loading ? (
        <Skeleton />
      ) : videos && videos.length !== 0 ? (
        <VideoGrid videos={videos} />
      ) : (
        <NoVidMssg />
      )}
    </>
  );
}
