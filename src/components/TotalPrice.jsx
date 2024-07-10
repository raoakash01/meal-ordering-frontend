import React from 'react';
import { Typography } from '@mui/material';
import '../assets/css/TotalPrice.css';

const TotalPrice = ({ selectedMeals }) => {
  const totalPrice = Object.values(selectedMeals).reduce((total, meal) => total + (meal.totalMealPrice || meal.price), 0);

  return (
    <Typography variant="h6">Total Price: ${totalPrice.toFixed(2)}</Typography>
  );
};

export default TotalPrice;
