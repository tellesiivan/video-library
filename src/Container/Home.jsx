import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Category,
  Create,
  Feed,
  NavBar,
  VideoPin,
  Search,
} from "../Components";

export default function Home({ user }) {
  return (
    <>
      <NavBar user={user} />
      <div className="flex flex-row">
        <div className="flex flex-col items-center justify-start w-16">
          <Category />
        </div>
        <div className="items-center justify-center flex-1 px-4">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/category/:categoryID" element={<Feed />} />
            <Route path="/create" element={<Create />} />
            <Route path="/details/videoID" element={<VideoPin />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
