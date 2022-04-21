import { Route, Routes } from "react-router-dom";
import { Create, Feed, NavBar, Vdetails, UserDetails } from "../Components";
import SideNav from "../Components/Nav/SideNav";

import Skeleton from "../helpers/Skeleton";

export default function Home({ user }) {
  return (
    <>
      <NavBar user={user} />
      <SideNav />
      <div className="h-full mt-16 md:ml-20">
        {/* add categories aka tags ex: categories && categories.map() */}
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryID" element={<Feed />} />
          <Route path="/create" element={<Create />} />
          <Route path="/v/:videoID" element={<Vdetails />} />
          <Route path="/u/:userID" element={<UserDetails />} />
          <Route path="/search" element={<Skeleton />} />
        </Routes>
      </div>
    </>
  );
}
