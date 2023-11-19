import React, { useState } from 'react';
import AddChoreForm from './AddChoreForm';

const ChoreManager = ({ housemates, assignChoreToHousemate }) => {
  const [chores, setChores] = useState([]);

  // Function to add a new chore to the list
  const addChoreToList = (choreName) => {
    if (!chores.includes(choreName)) {
      setChores(prevChores => [...prevChores, choreName]);
    } else {
      alert('Chore already exists.');
    }
  };

  return (
    <div>
      <AddChoreForm addChoreToList={addChoreToList} />
      <div>
        <h2>Unassigned Chores</h2>
        <ul>
          {chores.map((chore, index) => (
            <li key={index}>
              {chore}
              <select
                onChange={(e) => assignChoreToHousemate(chore, e.target.value)}
                defaultValue=""
              >
                <option value="" disabled>
                  Assign to...
                </option>
                {housemates.map((housemate, housemateIndex) => (
                  <option key={housemateIndex} value={housemate.name}>
                    {housemate.name}
                  </option>
                ))}
              </select>
              <button onClick={() => setChores(chores.filter(c => c !== chore))}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChoreManager;
