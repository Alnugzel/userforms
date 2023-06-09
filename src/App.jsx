import useFetch from "./hooks/useFetch";
import "./App.css";
import { useEffect } from "react";
import FormUsers from "./components/FormUsers";
import Users from "./components/Users";

function App() {
  const baseUrl = "https://users-crud.academlo.tech/";
  const [users, getAllusers, createNewUser, deleteUserById, updateUser] =
    useFetch(baseUrl);

  useEffect(() => {
    getAllusers("/users");
  }, []);

  console.log(users);

  return (
    <>
      <FormUsers createNewUser={createNewUser} />
      <div>
        {users?.map((user) => (
          <Users key={user.id} user={user} deleteUserById={deleteUserById} />
        ))}
      </div>
    </>
  );
}

export default App;
