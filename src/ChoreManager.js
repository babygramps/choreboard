import React from 'react';
import {Paper, Box, IconButton, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const UnassignedChores = ({chores, handleDragStart, removeChore}) => {
    return (
        <Paper elevation={3}
            sx={
                {
                    padding: 2,
                    marginTop: 2
                }
        }>
            <Typography variant="h6" gutterBottom>
                Unassigned Chores
            </Typography>
            <Box sx={
                {
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2
                }
            }>
                {
                chores.map((chore, index) => (
                    <Box key={index}
                        draggable="true"
                        onDragStart={
                            (e) => handleDragStart(e, chore)
                        }
                        sx={
                            {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                padding: 1,
                                border: '1px solid',
                                borderRadius: '4px',
                                cursor: 'grab'
                            }
                    }>
                        <Typography variant="body1">
                            {chore}</Typography>
                        <IconButton edge="end"
                            onClick={
                                () => removeChore(chore)
                            }
                            size="small">
                            <DeleteIcon/>
                        </IconButton>
                    </Box>
                ))
            } </Box>
        </Paper>
    );
};

export default UnassignedChores;
