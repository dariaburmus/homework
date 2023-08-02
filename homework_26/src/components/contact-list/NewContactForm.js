import React, { useState } from "react";

import "./styles.scss";

const NewContact = ({ handleAddContact }) => {
  const [contactData, setContactData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });
  const [showForm, setShowForm] = useState(false);

  const resetForm = () => {
    setContactData({ name: "", surname: "", phone: "", email: "" });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddContact(contactData);

    resetForm();
  };

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);

    resetForm();
  };

  return (
    <div className="form-container">
      <button onClick={toggleForm}>
        {`${showForm ? "Hide" : "Show"} Form`}
      </button>
      {showForm && (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="surname">Surname:</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={contactData.surname}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={contactData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactData.email}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Add Contact</button>
        </form>
      )}
    </div>
  );
};

export default NewContact;
