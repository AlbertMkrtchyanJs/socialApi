import React from "react";
import { useSelector } from "react-redux";
import User from "../../components/User/User";
import style from './UserPage.module.css'

const UserPage = () => {
  const { users } = useSelector((state) => state.getUserState);

  return (
    <div className={style.b}>
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UserPage;
