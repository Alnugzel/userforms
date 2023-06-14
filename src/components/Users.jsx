import React from "react";
import "../styles/users.css";

const Users = ({ user, deleteUserById, setUpdateInfo }) => {
  const handleDeleteUser = () => {
    deleteUserById("/users", user.id);
  };

  const handleUpdate = () => {
    setUpdateInfo(user);
  };

  return (
    <article>
      <h1>
        {user.first_name} {user.last_name}
      </h1>
      <ul>
        <li>
          <span>Email:</span> <span>{user.email}</span>
        </li>
        <li>
          <span>Birthday:</span> <span>{user.birthday}</span>
        </li>
      </ul>
      <div className="">
        <button onClick={handleDeleteUser}>❌</button>
        <button onClick={handleUpdate}>✅</button>
      </div>
    </article>
  );
};

export default Users;
