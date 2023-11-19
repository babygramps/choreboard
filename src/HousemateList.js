import React from 'react';
import './HousemateList.css'; // Import the CSS for this component

const HousemateList = ({ housemates, toggleChoreCompletion, handleDrop, handleDragOver }) => {
  return (
    <div className="housemate-list">
      {housemates.map((housemate, index) => (
        <div
          key={index}
          className="housemate-card"
          onDrop={e => handleDrop(e, housemate.name)}
          onDragOver={handleDragOver}
        >
          <h3 className="housemate-name">{housemate.name}</h3>
          <ul>
            {housemate.chores.map((chore, choreIndex) => (
              <li key={choreIndex} className="chore-item">
                {chore}
                {/* Checkbox removed since chore completion is not part of the drag-and-drop functionality */}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HousemateList;
