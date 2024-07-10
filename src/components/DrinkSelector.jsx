import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import '../assets/css/DrinkSelector.css';

const DrinkSelector = () => {
    return (
        <FormControl fullWidth>
            <InputLabel>Drink</InputLabel>
            <Select>
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="water">Water</MenuItem>
                <MenuItem value="soda">Soda</MenuItem>
                <MenuItem value="juice">Juice</MenuItem>
            </Select>
        </FormControl>
    );
};

export default DrinkSelector;
