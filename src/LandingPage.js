import React from 'react';

import {AuthProvider} from './helperFunctions/Auth';


import {signOut} from 'aws-amplify/auth'

import {
    Typography,
    Box,
    Button,
    Container,
    useMediaQuery
} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import Header from './Header';
import MoreInfoSection from './MoreInfoSection';

const LandingPage = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container maxWidth="lg"
            sx={
                {overflowX: 'hidden'}
        }>
            <AuthProvider><Header/></AuthProvider>

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
                    ChoreBoard
                </Typography>
                <Typography variant="h5"
                    sx={
                        {
                            mb: 4,
                            color: 'success.main'
                        }
                }>
                    Revolutionizing Household Management
                </Typography>


                <MoreInfoSection/>
            </Box>
        </Container>
    );
};

export default LandingPage;
