import "./styles/users.css";

const Users = ({ user, deleteUserById, setUpdateInfo, setIsCloseForm }) => {
  const handleDeleteUser = () => {
    deleteUserById("/users", user.id);
  };

  const handleUpdate = () => {
    setUpdateInfo(user);
    setIsCloseForm(false);
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
        <button onClick={handleDeleteUser}>
          <i class="bx bx-trash"></i>
        </button>
        <button onClick={handleUpdate}>
          <i class="bx bx-edit-alt"></i>
        </button>
      </div>
    </article>
  );
};

export default Users;
