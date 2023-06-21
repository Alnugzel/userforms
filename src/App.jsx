import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import "./App.css";
import FormUsers from "./components/FormUsers";
import Users from "./components/Users";
import Messages from "./components/Messages";

function App() {
  const baseUrl = "https://users-crud.academlo.tech/";
  const [users, getAllusers, createNewUser, deleteUserById, updateUserById] =
    useFetch(baseUrl);

  const [updateInfo, setUpdateInfo] = useState();
  const [isCloseForm, setIsCloseForm] = useState(true);
  const [messages, setMessages] = useState(true);

  const handleOpenCreateUser = () => {
    setIsCloseForm(false);
  };

  useEffect(() => {
    getAllusers("/users/");
  }, []);

  console.log(users);

  return (
    <>
      <div className="header">
        <h1>Users</h1>
        <button onClick={handleOpenCreateUser}>
          <span>+</span> Create new user
        </button>
      </div>

      <div className={`content__form ${isCloseForm && "hide-form"}`}>
        <FormUsers
          updateInfo={updateInfo}
          createNewUser={createNewUser}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setIsCloseForm={setIsCloseForm}
        />
      </div>

      <div className={`content__message ${messages && "hide-messages"}`}>
        <Messages />
      </div>
      <div className="content__user">
        {users?.length ? (
          users?.map((user) => (
            <Users
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setIsCloseForm={setIsCloseForm}
            />
          ))
        ) : (
          <h2>Sorry,there are currently no registered users ⛔</h2>
        )}
      </div>
    </>
  );
}

export default App;
