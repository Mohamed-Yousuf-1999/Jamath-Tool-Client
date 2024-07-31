import React, { useEffect, useState } from "react";
import "./UserForm.css";

const UserForm = ({ user, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    fatherId: "",
    fatherName: "",
    address: "",
    dob: new Date(),
    contact: "",
    isAlive: true,
    isMarried: false,
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="dob">DOB</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="fatherName">Father's Name</label>
        <input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
