import {getCurrentUser} from 'aws-amplify/auth';
import {fetchUserAttributes} from 'aws-amplify/auth';
import React, {useState, useEffect} from 'react';
import HousemateForm from './AddHousemateForm';
import HousemateList from './HousemateList';
import AddChoreForm from './AddChoreForm';
import './ChoreLeaderboard.css'; // Import the CSS file

import {Amplify} from 'aws-amplify';

import {withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

const signUpConfig = {
    header: 'Sign up please',
    hideAllDefaults: true,
    signUpFields: [
        {
            label: 'First name',
            key: 'given_name',
            required: true,
            displayOrder: 1,
            type: 'text',
            placeholder: 'First name'
        }, {
            label: 'Last name',
            key: 'family_name',
            required: true,
            displayOrder: 2,
            type: 'text',
            placeholder: 'Last name'
        }
    ]
}

const App = ({signOut, user}) => {

    const [housemates, setHousemates] = useState([
        {
            name: "Rick",
            chores: [],
            points: 0
        }, {
            name: "Matt",
            chores: [],
            points: 0
        }, {
            name: "Thora",
            chores: [],
            points: 0
        }, {
            name: "Susan",
            chores: [],
            points: 0
        }
    ]);
    const [chores, setChores] = useState(["Bathrooms", "Commons", "Kitchen", "Vacation"]);

    const [userAttributes, setUserAttributes] = useState(null);

    useEffect(() => {
        async function fetchAttributes() {
            try {
                const attributes = await handleFetchUserAttributes();
                setUserAttributes(attributes);
            } catch (error) {
                console.error('Error fetching user attributes:', error);
            }
        }

        fetchAttributes();
    }, []);

    async function handleFetchUserAttributes() {
        try {
            const userAttributes = await fetchUserAttributes();
            console.log(userAttributes);
            return userAttributes
        } catch (error) {
            console.log(error);
        }
    }

    // Function to add a new housemate
    const addHousemate = (name) => {
        const newHousemate = {
            name,
            chores: [],
            points: 0
        };
        setHousemates(prevHousemates => [
            ...prevHousemates,
            newHousemate
        ]);
    };

    // Function to remove a housemate
    const removeHousemate = (housemateName) => {
        setHousemates((prevHousemates) => prevHousemates.filter((housemate) => housemate.name !== housemateName));
    };


    // Function to add a new chore to the list
    const addChoreToList = (choreName) => {
        if (!chores.includes(choreName)) {
            setChores(prevChores => [
                ...prevChores,
                choreName
            ]);
        } else {
            alert('Chore already exists.');
        }
    };

    // Function to remove a chore from the list
    const removeChore = (choreName) => {
        setChores(prevChores => prevChores.filter(chore => chore !== choreName));
    };

    // Function to assign a chore to a housemate
    const assignChoreToHousemate = (choreName, housemateName) => {
        setHousemates((prevHousemates) => prevHousemates.map((housemate) => {
            if (housemate.name === housemateName) {
                if (!housemate.chores.includes(choreName)) { // Add the chore to the housemate's chores
                    const updatedChores = [
                        ...housemate.chores,
                        choreName
                    ];
                    const updatedHousemate = {
                        ...housemate,
                        chores: updatedChores
                    };
                    return updatedHousemate;
                }
            }
            return housemate;
        }));

        // Remove the chore from the list of unassigned chores
        setChores((prevChores) => prevChores.filter((chore) => chore !== choreName));
    };


    // Function to delete a chore from a housemate and return it to the unassigned chores list
    const deleteChoreFromHousemate = (choreName, housemateName) => {
        setHousemates(prevHousemates => prevHousemates.map(housemate => {
            if (housemate.name === housemateName && housemate.chores.includes(choreName)) {
                const updatedChores = housemate.chores.filter(chore => chore !== choreName);
                setChores(prevChores => {
                    if (!prevChores.includes(choreName)) {
                        return [
                            ...prevChores,
                            choreName
                        ]; // Add the chore to the unassigned chores list only once
                    }
                    return prevChores;
                });
                return {
                    ...housemate,
                    chores: updatedChores
                };
            }
            return housemate;
        }));
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

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const weekRange = getCurrentWeek();

    // Function to mark a chore as complete
    const toggleChoreCompletion = (choreName, housemateName) => {
        setHousemates((prevHousemates) => prevHousemates.map((housemate) => {
            if (housemate.name === housemateName && housemate.chores.includes(choreName)) { // Increment the housemate's points
                const updatedHousemate = {
                    ...housemate,
                    chores: housemate.chores.filter((chore) => chore !== choreName), // Remove the chore
                    points: housemate.points + 1
                };

                // Remove the chore from teh housemate and add it back to the unassigned chore list
                setChores(prevChores => {
                    if (!prevChores.includes(choreName)) {
                        return [
                            ...prevChores,
                            choreName
                        ]
                    }
                    return prevChores
                })

                return updatedHousemate;
            }
            return housemate;
        }));
    };
    if (!userAttributes) { // Render a loading spinner or a placeholder
        return <div>Loading...</div>;
    }

    return (
        <div className="app-container">
            <h3>Welcome back, {
                userAttributes.given_name
            }</h3>
            <button onClick={signOut}>Sign out</button>
            <h1>Chore Leaderboard</h1>
            <div className="week-display">Week of: {weekRange}</div>
            <HousemateForm addHousemate={addHousemate}/>
            <AddChoreForm addChoreToList={addChoreToList}/>
            <HousemateList housemates={housemates}
                handleDrop={handleDrop}
                handleDragOver={handleDragOver}
                deleteChoreFromHousemate={deleteChoreFromHousemate}
                toggleChoreCompletion={toggleChoreCompletion}
                removeHousemate={removeHousemate}/>

            <div className="unassigned-chores">
                <h2>Unassigned Chores</h2>
                <ul> {
                    chores.map((chore, index) => (
                        <div key={index}
                            className="chore-item"
                            // Make sure this class is defined in your CSS
                            draggable="true"
                            onDragStart={
                                (e) => handleDragStart(e, chore)
                            }
                            data-chore={chore}>
                            {chore}
                            <button className="delete-button"
                                onClick={
                                    () => removeChore(chore)
                            }>
                                Remove
                            </button>
                        </div>
                    ))
                } </ul>
            </div>
        </div>
    );
};

export default withAuthenticator(App);
