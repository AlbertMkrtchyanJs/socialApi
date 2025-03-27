import React from "react";
import userImage from "../../../src/assets/download.jpeg";

import style from "./User.module.css";

const User = ({ user }) => {
  return (
    <div className={style.userPAge}>
      <div className={style.users}>
        <h2>{user?.name}</h2>
        <img
          src={user?.photos.large === null ? userImage : user?.photos.large}
          width={130}
        />
      </div>
    </div>
  );
};

export default User;
