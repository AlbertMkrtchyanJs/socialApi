import React from "react";
import { useSelector } from "react-redux";
import { pageNum } from "../../data/data";
import User from "../../components/User/User";

import style from "./UserPage.module.css";

const UserPage = () => {
  const { users } = useSelector((state) => state.getUserState);

  return (
    <div>
      <div className={style.pag}>
       {
        pageNum.map((el)=>{
            return <button key={el}>{el}</button>
        })
       }
      </div>
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UserPage;
