import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    Button,
    List,
    ListItem,
    Typography,
    IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const HousemateList = ({
    housemates,
    toggleChoreCompletion,
    handleDrop,
    handleDragOver,
    deleteChoreFromHousemate,
    removeHousemate
}) => {
    return (
        <div> {
            housemates.map((housemate, index) => (
                <Card key={index}
                    sx={
                        {marginBottom: 2}
                    }
                    onDrop={
                        e => handleDrop(e, housemate.name)
                    }
                    onDragOver={handleDragOver}>
                    <CardHeader action={<IconButton
                            onClick={
() => removeHousemate(housemate.name)}>
                        <DeleteIcon/></IconButton>}
                        title={
                            `${
                                housemate.name
                            }: ${
                                housemate.points
                            } Points`
                        }/>
                    <CardContent>
                        <List> {
                            housemate.chores.map((chore, choreIndex) => (
                                <ListItem key={choreIndex}
                                    sx={
                                        {
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }
                                }>
                                    <Typography variant="body1">
                                        {chore}</Typography>
                                    <div>
                                        <IconButton onClick={
                                                () => deleteChoreFromHousemate(chore, housemate.name)
                                            }
                                            color="error">
                                            <DeleteIcon/>
                                        </IconButton>
                                        <IconButton onClick={
                                                () => toggleChoreCompletion(chore, housemate.name)
                                            }
                                            color="success">
                                            <CheckCircleIcon/>
                                        </IconButton>
                                    </div>
                                </ListItem>
                            ))
                        } </List>
                    </CardContent>
                </Card>
            ))
        } </div>
    );
};

export default HousemateList;
