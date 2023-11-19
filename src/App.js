import React, { useState } from 'react';
import HousemateForm from './AddHousemateForm';
import HousemateList from './HousemateList';
import AddChoreForm from './AddChoreForm';

import './ChoreLeaderboard.css'

const App = () => {
  const [housemates, setHousemates] = useState([]);
  const [chores, setChores] = useState(["Bathrooms", "Commons", "Kitchen", "Vacation"]);

  // Function to add a new housemate
  const addHousemate = (name) => {
    const newHousemate = { name, chores: [] };
    setHousemates(prevHousemates => [...prevHousemates, newHousemate]);
  };

  // Function to add a new chore to the list
  const addChoreToList = (choreName) => {
    if (!chores.includes(choreName)) {
      setChores(prevChores => [...prevChores, choreName]);
    } else {
      alert('Chore already exists.');
    }
  };

  // Function to assign a chore to a housemate
  const assignChoreToHousemate = (choreName, housemateName) => {
    setHousemates(prevHousemates =>
      prevHousemates.map(housemate =>
        housemate.name === housemateName
          ? { ...housemate, chores: [...housemate.chores, choreName] }
          : housemate
      )
    );
    // Remove the chore from the list of unassigned chores
    setChores(prevChores => prevChores.filter(chore => chore !== choreName));
  };

// Function to get the start and end of the current week in the format month/day/year
const getCurrentWeek = () => {
  const currentDate = new Date();
  const startOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(endOfWeek.getDate() + 6);

  const start = startOfWeek.toLocaleDateString('en-US'); // defaults to 'mm/dd/yyyy' for 'en-US'
  const end = endOfWeek.toLocaleDateString('en-US');

  return `${start} - ${end}`;
};

const handleDragStart = (e, chore) => {
  e.dataTransfer.setData('text/plain', chore);
};

const handleDrop = (e, housemateName) => {
  e.preventDefault();
  const chore = e.dataTransfer.getData('text/plain');
  assignChoreToHousemate(chore, housemateName);
};

    const weekRange = getCurrentWeek();
  
    return (
    <div className="app-container">
      <h1>Chore Leaderboard</h1>
      <div className="week-display">Week of: {weekRange}</div>
      <HousemateForm addHousemate={addHousemate} />
      <AddChoreForm addChoreToList={addChoreToList} />
      <HousemateList
  housemates={housemates}
  //toggleChoreCompletion={toggleChoreCompletion} // Assuming this is still needed for other functionality
  handleDrop={handleDrop}
  handleDragOver={(e) => e.preventDefault()}
/>
      <div>
        <h2>Unassigned Chores</h2>
        <ul style={{listStyleType: 'none'}}>
          {chores.map((chore, index) => (
              <li
              key={index}
              draggable="true"
              onDragStart={(e) => handleDragStart(e, chore)}
            >
              {chore}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
