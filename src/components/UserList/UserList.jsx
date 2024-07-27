import React from "react";
import './UserList.css'

const UserList = ({ users }) => {
  return (
    <table className="user-list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Father's Name</th>
          <th>Subscriptions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.userId}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.fatherName}</td>
            <td>
              {user.pendingAmount}/{user.totalAmount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
