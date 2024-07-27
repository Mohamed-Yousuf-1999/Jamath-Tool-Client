import React, { useEffect, useState } from "react";

const UserForm = ({ user, onSave }) => {
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

  return(
    <form onSubmit={handleChange}>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
        </div>
        <div>
            <label htmlFor="dob">Name</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required/>
        </div>
        <div>
            <label htmlFor="fatherName">Father's Name</label>
            <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange}/>
        </div>        
        <div>
            <label htmlFor="contact">Contact</label>
            <input type="text" name="contact" value={formData.contact} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange}/>
        </div>
        
        
    </form>
  )
};
