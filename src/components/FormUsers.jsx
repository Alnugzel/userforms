import React from "react";
import { useForm } from "react-hook-form";

const FormUsers = ({ createNewUser }) => {
  const { register, reset, handleSubmit } = useForm();

  const submit = (data) => {
    createNewUser("/users", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
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
        <label htmlFor="birthdate">
          <input {...register("birthday")} id="birthday" type="date" />
        </label>
      </div>
      <button>create</button>
    </form>
  );
};

export default FormUsers;
