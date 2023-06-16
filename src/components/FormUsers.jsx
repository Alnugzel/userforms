import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/formUsers.css";

const FormUsers = ({
  createNewUser,
  updateInfo,
  updateUserById,
  setUpdateInfo,
  setIsCloseForm,
}) => {
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo) {
      //Update
      updateUserById("/users", data.id, data);
      setUpdateInfo();
    } else {
      //Crear
      createNewUser("/users/", data);
    }

    reset({
      email: "",
      password: "",
      last_name: "",
      first_name: "",
      birthday: "",
    });
    setIsCloseForm(true);
  };

  const handleClose = () => {
    reset({
      email: "",
      password: "",
      last_name: "",
      first_name: "",
      birthday: "",
    });
    setIsCloseForm(true);
    setUpdateInfo();
  };

  return (
    <div className="content__form">
      <form onSubmit={handleSubmit(submit)}>
        <i className="handle__close bx bx-x" onClick={handleClose}></i>
        <h2>Users Form</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register("email")} id="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register("password")} id="password" type="password" />
        </div>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input {...register("first_name")} id="first_name" type="text" />
        </div>
        <div>
          <label htmlFor="last_name">Lastname</label>
          <input {...register("last_name")} id="last_name" type="text" />
        </div>
        <div>
          <label htmlFor="birthday">Birthday</label>
          <input {...register("birthday")} id="birthday" type="date" />
        </div>
        <div>
          <button>{updateInfo ? "Update" : "Create"}</button>
        </div>
      </form>
    </div>
  );
};

export default FormUsers;
