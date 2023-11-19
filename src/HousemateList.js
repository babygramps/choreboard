import React from 'react';
import './HousemateList.css'; // Import the CSS for this component

const HousemateList = ({
    housemates,
    toggleChoreCompletion,
    handleDrop,
    handleDragOver,
    deleteChoreFromHousemate,
    removeHousemate
}) => {
    return (
        <div className="housemate-list">
            {
            housemates.map((housemate, index) => (
                <div key={index}
                    className="housemate-card"
                    onDrop={
                        e => handleDrop(e, housemate.name)
                    }
                    onDragOver={handleDragOver}>
                    <div className="housemate-header">
                        <h3 className="housemate-name">
                            {
                            housemate.name
                        }
                            : {
                            housemate.points
                        } </h3>
                        <button className="remove-button"
                            onClick={
                                () => removeHousemate(housemate.name)
                        }>
                            x
                        </button>
                    </div>
                    <ul> {
                        housemate.chores.map((chore, choreIndex) => (
                            <li key={choreIndex}
                                className="chore-item">
                                {chore}
                                <div className="chore-actions">
                                    <button className="delete-button"
                                        onClick={
                                            () => deleteChoreFromHousemate(chore, housemate.name)
                                    }>
                                        Delete
                                    </button>
                                    <button className="complete-button"
                                        onClick={
                                            () => toggleChoreCompletion(chore, housemate.name)
                                    }>
                                        Complete
                                    </button>
                                </div>
                            </li>
                        ))
                    } </ul>
                </div>
            ))
        } </div>
    );
};

export default HousemateList;
