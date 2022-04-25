import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Container/Home";
import Login from "./Container/Login";
import { getUser, token } from "./utils/authUser";
import Theme from "./utils/theme";
import { useDispatch } from "react-redux";
import { mainActions } from "./store/mainSlice";

export default function App() {
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const activeToken = token();

  useEffect(() => {
    Theme();

    if (!activeToken) {
      navigate("/login", { replace: true });
    } else {
      const userInfo = getUser();
      setUser(userInfo[0]);
      dispatch(mainActions.setUser({ user: userInfo[0] }));
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home user={user} />} />
    </Routes>
  );
}
