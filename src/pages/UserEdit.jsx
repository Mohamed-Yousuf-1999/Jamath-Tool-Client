import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUser, updateUser } from "../services/userApi";

export const UserEdit = () => {
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState({
    userId: "",
    name: "",
    fatherId: "",
    fatherName: "",
    address: "",
    dob: new Date().toISOString().split('T')[0],
    contact: "",
    isAlive: true,
    isMarried: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const data = await getUser(id);
      const userData = data.userDetail;
      setUserDetail({
        ...userData,
        dob: new Date(userData.dob).toISOString().split('T')[0],
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(userDetail.userId, userDetail);
      navigate(`/user-detail/${userDetail.userId}`);
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  };

  return (
    <div className="user-detail-edit">
      <h2>Edit User Detail</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userDetail.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fatherName">Father's Name:</label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={userDetail.fatherName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">DOB:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={userDetail.dob}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={userDetail.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={userDetail.contact}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="isMarried">Marital Status:</label>
          <select
            id="isMarried"
            name="isMarried"
            value={userDetail.isMarried}
            onChange={handleChange}
          >
            <option value={true}>Married</option>
            <option value={false}>Unmarried</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="isAlive">Status:</label>
          <select
            id="isAlive"
            name="isAlive"
            value={userDetail.isAlive}
            onChange={handleChange}
          >
            <option value={true}>Alive</option>
            <option value={false}>Not alive</option>
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};
