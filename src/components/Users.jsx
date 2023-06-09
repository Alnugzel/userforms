import React from "react";

const Users = ({ user, deleteUserById }) => {
  const handleDeleteUser = () => {
    deleteUserById("/users", user.id);
  };

  return (
    <>
      <div>
        {user.id}
        <ul>{user.first_name}</ul>
        <ul>{user.last}</ul>
        <ul>{user.email}</ul>
        <ul>{user.password}</ul>
        <ul>{user.birthday}</ul>
        <ul>{user.image_url}</ul>
      </div>
      <button onClick={handleDeleteUser}>❌</button>
      <button>✅</button>
    </>
  );
};

export default Users;
