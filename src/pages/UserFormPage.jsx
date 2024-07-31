import React, { useState } from "react";
import UserForm from "../components/UserForm/UserForm";
import { createUser } from "../services/userApi";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export const UserFormPage = ({title}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = async (userData) => {
    try {
      console.log(userData);
      await createUser(userData);
    } catch (error) {
      console.error("Error creating user : ", error);
    }
    navigate("/users");
  };
  return (
    <div className="user-form-page">
      <Helmet>
        <title>Add User</title>
      </Helmet>
      <h3>{title}</h3>
      <UserForm user={currentUser} onSubmit={handleFormSubmit} />
    </div>
  );
};
