import React from "react";
import userImage from "../../assets/gago.jpg";
import style from "./User.module.css";
import { NavLink } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div className={style.userPAge}>
      <div className={style.users}>
        <NavLink to={`/profile/${user.id}`}>
          <h2 className={style.font}>{user?.name}</h2>
          <img
            style={{
              border: '2px solid white',
              marginBottom: "20px",
            }}
            src={user?.photos.large === null ? userImage : user?.photos.large}
            width={130}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default User;
