import React, { useEffect, useState } from "react";
import { getUsers } from "../services/userApi";
import UserList from "../components/UserList/UserList";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import "../styles/UserPage.css";
const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleAddUser = () => {
    setCurrentUser(null);
    navigate("/add-user");
  };

  const handleUserClick = (userId) => {
    navigate(`/user-detail/${userId}`);
  };
  return (
    <div>
      <Helmet>
        <title>Users</title>
      </Helmet>
      <div className="user-display">
        <div className="title">
          <h3>Users</h3>
        </div>
        <div className="add-user">
          <button onClick={handleAddUser}>Add User</button>
        </div>
      </div>

      <UserList users={users} onUserClick={handleUserClick} />
    </div>
  );
};

export default UsersPage;
