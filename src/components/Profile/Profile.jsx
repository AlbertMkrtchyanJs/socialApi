import React from "react";
import { useSelector } from "react-redux";
import gago from "../../assets/gago.jpg";
import style from "./Profile.module.css";
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";

const Profile = () => {
  const { profile } = useSelector((state) => state.profileState);

  

  console.log(profile);

  return (
    <div className={style.mainBox}>
      <div className={style.boxx}>
        <img
          className={style.img}
          src={profile?.photos?.large === null ? gago : profile?.photos?.large}
        />
        <h1>{profile?.fullName}</h1>
      </div>
      <div className={style.boxx}>
        {profile?.aboutMe === null ? (
          <p>NO DESCRIPTION YET!!</p>
        ) : (
          <p>Description :{profile?.aboutMe}</p>
        )}
        {profile?.lookingForAJob === true ? (
          <div className={style.job}>
            <p>Looking for a job :</p>
            <FiThumbsUp />
          </div>
        ) : (
          <FiThumbsDown />
        )}
         {profile?.lookingForAJobDescription ? (
          <div className={style.job}>
            <p>Skills :</p>
            <FiThumbsUp />
            <p>{profile?.lookingForAJobDescription}</p>
          </div>
        ) : (
          <FiThumbsDown />
        )}
      </div>
    </div>
  );
};

export default Profile;
