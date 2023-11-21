import React from 'react';
import {Box, Typography, Grid, Paper} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // You can import icons as needed
import GroupIcon from '@mui/icons-material/Group';

const MoreInfoSection = () => {
    return (
        <Box mt={6}
            py={4}>
            <Typography variant="h4"
                sx={
                    {
                        fontWeight: 'bold',
                        mb: 2
                    }
            }>
                More Information about ChoreBoard
            </Typography>
            <Grid container
                spacing={4}>
                <Grid item
                    xs={12}
                    sm={6}>
                    <Paper elevation={3}
                        sx={
                            {
                                p: 3,
                                display: 'flex',
                                alignItems: 'center'
                            }
                    }>
                        <AccessTimeIcon fontSize="large" color="primary"
                            sx={
                                {mr: 2}
                            }/>
                        <Typography variant="h6"
                            sx={
                                {fontWeight: 'bold'}
                        }>
                            Fun and Efficient
                        </Typography>
                        <Typography variant="body1"
                            sx={
                                {mt: 2}
                        }>
                            ChoreBoard turns chores into a fun game, motivating housemates and families to complete tasks efficiently.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item
                    xs={12}
                    sm={6}>
                    <Paper elevation={3}
                        sx={
                            {
                                p: 3,
                                display: 'flex',
                                alignItems: 'center'
                            }
                    }>
                        <GroupIcon fontSize="large" color="primary"
                            sx={
                                {mr: 2}
                            }/>
                        <Typography variant="h6"
                            sx={
                                {fontWeight: 'bold'}
                        }>
                            Collaborative Approach
                        </Typography>
                        <Typography variant="body1"
                            sx={
                                {mt: 2}
                        }>
                            Work together as a team, assign tasks, and keep track of everyone's progress with ChoreBoard's collaborative features.
                        </Typography>
                    </Paper>
                </Grid>
                {/* Add more grid items with icons and descriptions as needed */} </Grid>
        </Box>
    );
};

export default MoreInfoSection;
