import React from "react";
import { Route, Routes } from "react-router-dom";
import { Create, Feed, NavBar, VideoPin, Search } from "../Components";
import SideNav from "../Components/Nav/SideNav";

export default function Home({ user }) {
  return (
    <>
      <NavBar user={user} />
      <SideNav />
      <div className="pb-4 mt-16 md:ml-20">
        {/* add categories aka tags ex: categories && categories.map() */}
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryID" element={<Feed />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/videoID" element={<VideoPin />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </>
  );
}
