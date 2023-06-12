import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import "./App.css";
import FormUsers from "./components/FormUsers";
import Users from "./components/Users";

function App() {
  const [updateInfo, setUpdateInfo] = useState();

  const baseUrl = "https://users-crud.academlo.tech/";
  const [users, getAllusers, createNewUser, deleteUserById, updateUserById] =
    useFetch(baseUrl);

  useEffect(() => {
    getAllusers("/users");
  }, []);

  console.log(users);

  return (
    <>
      <FormUsers
        updateInfo={updateInfo}
        createNewUser={createNewUser}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
      />
      <div>
        {users?.map((user) => (
          <Users
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
          />
        ))}
      </div>
    </>
  );
}

export default App;
