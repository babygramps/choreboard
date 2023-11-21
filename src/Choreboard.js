import React, {useState, useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {signOut} from 'aws-amplify/auth';
import {
    Container,
    Box,
    Typography,
    Button,
    useMediaQuery,
    Grid,
    Paper
} from '@mui/material';
import {useTheme} from '@mui/material/styles';

import {createUser} from './graphql/mutations';
import {getUser} from './graphql/queries';
import HousemateForm from './AddHousemateForm';
import HousemateList from './HousemateList';
import AddChoreForm from './AddChoreForm';
import ChoreManager from './ChoreManager';
import {AuthContext} from './helperFunctions/Auth';

import {generateClient} from 'aws-amplify/api';
const client = generateClient()


const Choreboard = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();
    const {userAttributes} = useContext(AuthContext);
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
    const [currentlySignedInUser, setCurrentlySignedInUser] = useState(null);

    useEffect(() => {
        const checkAndRegisterUser = async () => {
            try { // Get the user data from the GraphQL API
                const userData = await client.graphql({
                    query: getUser,
                    variables: {
                        id: userAttributes.sub
                    }
                });
                if (userData.data.getUser) { // User is already registered
                    setCurrentlySignedInUser(userData.data.getUser);
                    console.log(userData.data.getUser)
                } else { // Register the user

                    const userDetails = {
                        id: userAttributes.sub,
                        email: userAttributes.email,
                        first_name: userAttributes.given_name,
                        last_name: userAttributes.family_name
                    }

                    const newUser = await client.graphql({
                        query: createUser,
                        variables: {
                            input: userDetails
                        }
                    });
                    setCurrentlySignedInUser(newUser.data.createUser);
                }
            } catch (error) {
                console.error('Error checking or registering user:', error);
            }
        };

        if (userAttributes) {
            checkAndRegisterUser();
        } else {
            navigate("/signin");
        }
    }, [userAttributes, navigate]);

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

    async function handleSignOut() {
        try {
            await signOut();
            navigate("/")
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    if (!userAttributes) { // Render a loading spinner or a placeholder
        navigate("/signin")
        return <div>Loading...</div>;
    }


    return (
        <Container maxWidth="lg"
            sx={
                {overflowX: 'hidden'}
        }>
            <Box sx={
                {
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: 'url(/path-to-your-hero-image.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    p: isMobile ? 2 : 8
                }
            }>
                <Typography variant="h2" component="h1" gutterBottom
                    sx={
                        {
                            fontWeight: 'bold',
                            color: 'primary.main'
                        }
                }>
                    Chore Leaderboard
                </Typography>
                <Grid container
                    spacing={2}>
                    <Grid item
                        xs={12}
                        md={6}>
                        <Typography variant="h4" gutterBottom>Welcome back, {
                            currentlySignedInUser ? currentlySignedInUser.first_name : '...'
                        }</Typography>
                        <Typography variant="h5" gutterBottom
                            sx={
                                {mt: 2}
                        }>Week of: {weekRange}</Typography>
                        <HousemateForm addHousemate={addHousemate}/>
                        <AddChoreForm addChoreToList={addChoreToList}/>
                        <Button variant="contained" color="error"
                            onClick={handleSignOut}
                            sx={
                                {mt: 2}
                        }>Sign out</Button>
                    </Grid>
                    <Grid item
                        xs={12}
                        md={6}>
                        <Paper elevation={3}
                            sx={
                                {
                                    p: 2,
                                    mb: 2
                                }
                        }>
                            <Typography align="center" variant="h4" gutterBottom>Housemates:

                            </Typography>
                            <HousemateList housemates={housemates}
                                handleDrop={handleDrop}
                                handleDragOver={handleDragOver}
                                deleteChoreFromHousemate={deleteChoreFromHousemate}
                                toggleChoreCompletion={toggleChoreCompletion}
                                removeHousemate={removeHousemate}/>
                        </Paper>
                    </Grid>
                </Grid>
                <ChoreManager chores={chores}
                    handleDragStart={handleDragStart}
                    removeChore={removeChore}/>
            </Box>
        </Container>
    );
};

export default Choreboard;
