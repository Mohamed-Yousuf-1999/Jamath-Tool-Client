import React, { useEffect, useState } from "react";
import { getUsers } from "../services/userApi";
import UserList from "../components/UserList/UserList";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);;

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleAddUser = () => {
    setCurrentUser(null);
  };

  return (
    <div>
      <h1>User Management</h1>
      <button onClick={handleAddUser}>Add User</button>
      
      <UserList users={users} />
    </div>
  );
};

export default UsersPage;
