import React from "react";
import "./UserDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const UserDetail = ({ user }) => {
  const navigate = useNavigate();

  const handleEditUser = () => {
    navigate(`/edit-user/${user.userDetail.userId}`);
  };

  return (
    <>
      <div className="user-detail">
        <div className="header">
          <span>User Detail</span>
          <FontAwesomeIcon
            icon={faEdit}
            className="edit-icon"
            onClick={handleEditUser}
          />
        </div>

        <div className="detail-item">
          <span className="label">Name:</span>{" "}
          <span className="value">{user.userDetail.name}</span>
        </div>
        <div className="detail-item">
          <span className="label">Father's Name:</span>{" "}
          <span className="value">{user.userDetail.fatherName}</span>
        </div>
        <div className="detail-item">
          <span className="label">Age:</span>{" "}
          <span className="value">{user.userDetail.age}</span>
        </div>
        <div className="detail-item">
          <span className="label">Address:</span>{" "}
          <span className="value">{user.userDetail.address}</span>
        </div>
        <div className="detail-item">
          <span className="label">Contact:</span>{" "}
          <span className="value">{user.userDetail.contact}</span>
        </div>
        <div className="detail-item">
          <span className="label">Marital Status:</span>{" "}
          <span className="value">
            {user.userDetail.isMarried ? "Married" : "Unmarried"}
          </span>
        </div>

        <div
          className={`detail-item ${
            user.userDetail.isAlive ? "alive" : "nonAlive"
          }`}
        >
          <span className="label">Status:</span>
          <span className="value">
            {user.userDetail.isAlive ? "Alive" : "Not alive"}
          </span>
        </div>
      </div>
    </>
  );
};
