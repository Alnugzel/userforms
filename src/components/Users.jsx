import React from "react";

const Users = ({ user, deleteUserById, setUpdateInfo }) => {
  const handleDeleteUser = () => {
    deleteUserById("/users", user.id);
  };

  const handleUpdate = () => {
    setUpdateInfo(user);
  };

  return (
    <>
      <div>
        <ul>{user.first_name}</ul>
        <ul>{user.last}</ul>
        <ul>{user.email}</ul>
        <ul>{user.password}</ul>
        <ul>{user.birthday}</ul>
        <ul>{user.image_url}</ul>
      </div>
      <button onClick={handleDeleteUser}>❌</button>
      <button onClick={handleUpdate}>✅</button>
    </>
  );
};

export default Users;
