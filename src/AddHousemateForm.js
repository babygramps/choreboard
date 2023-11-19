import React, { useState } from 'react';
import './AddHousemateForm.css'; // Import the CSS for this component

const HousemateForm = ({ addHousemate }) => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim()) {
      addHousemate(name);
      setName(''); // Reset the input field after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="housemate-form">
      <div className="form-group">
        <label htmlFor="housemateName">Housemate's Name</label>
        <input
          id="housemateName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter housemate's name"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn">Add Housemate</button>
    </form>
  );
};

export default HousemateForm;
