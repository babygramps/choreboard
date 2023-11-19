import React, { useState } from 'react';

const AddChoreForm = ({ addChoreToList }) => {
  const [choreName, setChoreName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (choreName.trim()) {
      addChoreToList(choreName);
      setChoreName(''); // Reset the form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={choreName}
        onChange={(e) => setChoreName(e.target.value)}
        placeholder="Enter chore name"
      />
      <button type="submit">Add Chore</button>
    </form>
  );
};

export default AddChoreForm;
