import React from "react";
import { useSelector } from "react-redux";
import User from "../../components/User/User";

const UserPage = () => {
  const { users } = useSelector((state) => state.getUserState);

  return (
    <div>
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UserPage;
