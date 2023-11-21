import React, {useState} from 'react';
import {TextField, Button, Box} from '@mui/material';

const HousemateForm = ({addHousemate}) => {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim()) {
            addHousemate(name);
            setName(''); // Reset the input field after submission
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
                <TextField id="housemateName" label="Housemate's Name" variant="outlined"
                    value={name}
                    onChange={
                        (e) => setName(e.target.value)
                    }
                    placeholder="Enter housemate's name"
                    fullWidth/>
                <Button type="submit" variant="contained" color="primary">
                    Add Housemate
                </Button>
            </Box>
        </form>
    );
};

export default HousemateForm;
