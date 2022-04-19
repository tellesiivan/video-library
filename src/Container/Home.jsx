import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Create, Feed, NavBar, VideoPin, Search } from "../Components";
import SideNav from "../Components/Nav/SideNav";
import Skeleton from "../helpers/Skeleton";
import FetchVideos from "../utils/FetchVideos";

export default function Home({ user }) {
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
      <NavBar user={user} />
      <SideNav />
      <div className="pb-4 mt-16 md:ml-20">
        {/* add categories aka tags ex: categories && categories.map() */}
        <Routes>
          <Route
            path="/"
            element={loading ? <Skeleton /> : <Feed videoFeed={videos} />}
          />
          <Route path="/category/:categoryID" element={<Feed />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/videoID" element={<VideoPin />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </>
  );
}
