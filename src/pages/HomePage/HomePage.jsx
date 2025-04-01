import React from "react";
import LoginPage from "../LoginPage/LoginPage";

import style from "./HomePage.module.css";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const {userId} = useSelector((state) => state.authState)

  if (userId) {
    return <Navigate to={`/profile/${userId}`}/>
  }

  return (
    <div className={style.box}>
      <LoginPage />
    </div>
  );
};

export default HomePage;
