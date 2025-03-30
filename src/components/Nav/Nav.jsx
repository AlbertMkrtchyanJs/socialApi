import React from "react";
import style from "./Nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserTC } from "../../store/reducers/getUserReducer/getUserReducer";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const { totalUsersCount, totalPageCount } = useSelector(
    (state) => state.getUserState
  );

  const navigate = useNavigate()
  const pageCount = Math.ceil(totalUsersCount / totalPageCount);

  let pageArr = [];

  for (let i = 1; i <= pageCount; i++) {
    pageArr.push(i);
  }

  const dispatch = useDispatch();
  const handlePage = (page) => {
    dispatch(getUserTC(page));
    navigate(`/users?page=${page}`)
  };

  return (
    <div className={style.pag}>
      {pageArr.map((el) => {
        return (
          <button
            className={style.butt}
            key={el}
            onClick={() => handlePage(el)}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

export default Nav;
