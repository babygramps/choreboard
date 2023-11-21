import React, {useState, useEffect, useContext} from 'react';
import {AppBar, Toolbar, Typography, Button} from '@mui/material';
import {useNavigate} from 'react-router';

import {AuthContext} from './helperFunctions/Auth';


const Header = () => {
    const {userAttributes} = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        console.log(userAttributes)
        if (userAttributes) {
            setIsLoading(true)
        }

    }, [])

    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/signin')
    }

    const handleGoToChoreboardClick = () => {
        navigate('/console');
    };

    if (isLoading) { // Render a loading spinner or a placeholder
        return <AppBar position='static'/>
    }


    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div"
                    sx={
                        {flexGrow: 1}
                }>
                    Make chores more fun!
                </Typography>
                {
                userAttributes ? (
                    <Button color="success" variant='contained'
                        onClick={handleGoToChoreboardClick}>
                        Go to Choreboard
                    </Button>
                ) : (
                    <>
                        <Button color="success" variant='contained'
                            onClick={handleSignInClick}>
                            Log in or Sign up
                        </Button>
                    </>
                )
            } </Toolbar>

        </AppBar>
    );
};

export default Header;
