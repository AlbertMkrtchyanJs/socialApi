import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { profileTC } from "../../store/reducers/profileReducer/profileReducer";
import Profile from "../../components/Profile/Profile";
import EditProfile from "../../components/EditProfile/EditProfile";

const ProfilePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { userId } = useSelector((state) => state.authState);

  const isAuth = userId === +id;

  useEffect(() => {
    dispatch(profileTC(id));
  }, [id]);

  return (
    <>
      <div>
         <Profile />
        {isAuth && <EditProfile />}
      </div>
    </>
  );
};

export default ProfilePage;
