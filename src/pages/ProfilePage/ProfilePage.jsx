import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { profileTC } from "../../store/reducers/profileReducer/profileReducer";
import gago from "../../assets/gago.jpg";

const ProfilePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profileState);
  const { userId } = useSelector((state) => state.authState);
  console.log(profile);

  const isAuth = userId === +id;

  useEffect(() => {
    dispatch(profileTC(id));
  }, [id]);

  return (
    <>
      <div>
        <img
          src={profile?.photos?.large === null ? gago : profile?.photos?.large}
        />
        <h2>{profile.fullName}</h2>
        {
          isAuth ? <button>EDIT PROFILE</button> : ''
        }
      </div>
    </>
  );
};

export default ProfilePage;
