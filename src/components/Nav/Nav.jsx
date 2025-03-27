import React from "react";
import { pageNum } from "../../data/data";

import style from "./Nav.module.css";
import { NavLink, useLocation } from "react-router-dom";

const Nav = () => {
  let pathname = useLocation();
  return (
    <>
      <div className={style.pag}>
        {pageNum.map((el) => {
          return <button key={el}>{el}</button>;
        })}
      </div>
      <>
        {
        pathname === "/users" ||
          <NavLink to={"/users"}>
            <h1>GO TO USERS</h1>
          </NavLink>
        }
      </>
    </>
  );
};

export default Nav;
