import React, {useState} from 'react';
import {TextField, Button, Box} from '@mui/material';

const AddChoreForm = ({addChoreToList}) => {
    const [choreName, setChoreName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (choreName.trim()) {
            addChoreToList(choreName);
            setChoreName(''); // Reset the form
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                }
            }>
                <TextField label="Chore Name" variant="outlined"
                    value={choreName}
                    onChange={
                        (e) => setChoreName(e.target.value)
                    }
                    placeholder="Enter chore name"
                    fullWidth
                    sx={
                        {marginTop: 2}
                    }/>
                <Button type="submit" variant="contained" color="primary">
                    Add Chore
                </Button>
            </Box>
        </form>
    );
};

export default AddChoreForm;
