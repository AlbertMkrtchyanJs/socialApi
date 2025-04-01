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
        <h1 className={style.font}>{profile?.fullName}</h1>
      </div>
      <div className={style.boxx}>
        {profile?.aboutMe === null ? (
          <h3 className={style.font}>NO DESCRIPTION YET!!</h3>
        ) : (
          <p className={style.font}>Description :{profile?.aboutMe}</p>
        )}
        {profile?.lookingForAJob === true ? (
          <div className={style.job}>
            <p className={style.font}>Looking for a job :</p>
            <FiThumbsUp style={{color : 'white'}}/>
          </div>
        ) : (
          <div className={style.job}>
            <p className={style.font}>Looking for a job :</p>
            <FiThumbsDown style={{color : 'white'}}/>
          </div>
        )}
        {profile?.lookingForAJobDescription ? (
          <div className={style.job}>
            <p className={style.font}>Skills :</p>
            <FiThumbsUp style={{color : 'white'}}/>
            <p className={style.font}>{profile?.lookingForAJobDescription}</p>
          </div>
        ) : (
          <div className={style.job}>
            <p className={style.font}>Skills :</p> <FiThumbsDown style={{color : 'white'}}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
