import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { profileTC } from "../../store/reducers/profileReducer/profileReducer";
import gago from "../../assets/gago.jpg";

const ProfilePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { profile } = useSelector((store) => store.profileState);

  useEffect(() => {
    if (id) {
      if (!profile || profile.userId !== Number(id)) {
        dispatch(profileTC(id));
      }
    }
  }, [id, profile, dispatch]);

  return (
   
      <>
        <h1>{profile.fullName}</h1>
        <div>
          <img src={profile.photos || gago} />
        </div>
      </>
   
  );
};

export default ProfilePage;
