import React from "react";
import { pageNum } from "../../data/data";

import style from "./Nav.module.css";
import { useDispatch } from "react-redux";
import { getUserTC } from "../../store/reducers/getUserReducer/getUserReducer";


const Nav = () => {
const dispatch = useDispatch()
    const handlePage = (page) => {
        dispatch(getUserTC(page))
    }

  return (
      <div className={style.pag}>
        {pageNum.map((el) => {
          return <button className={style.butt} key={el} onClick={() => handlePage(el)}>{el}</button>;
        })}
      </div>
   
  );
};

export default Nav;
