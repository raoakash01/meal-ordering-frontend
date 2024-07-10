import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import '../assets/css/MealItem.css';

const fallbackImage = 'https://via.placeholder.com/140';

const MealItem = ({ meal, selectedMeals, setSelectedMeals }) => {
  const [selectedDrink, setSelectedDrink] = useState('');

  const handleSelectMeal = () => {
    const drink = meal.drinks.find(d => d.title === selectedDrink);
    const drinkPrice = drink ? drink.price : 0;

    setSelectedMeals(prev => ({
      ...prev,
      [meal.id]: { ...meal, selectedDrink, totalMealPrice: meal.price + drinkPrice }
    }));
  };

  const handleDrinkChange = (event) => {
    setSelectedDrink(event.target.value);
  };

  return (
    <Card className="meal-card">
      <Box display="flex" alignItems="center">
        <CardMedia
          className="card-media img-meal"
          component="img"
          height="140"
          image={meal.img}
          alt={meal.title}
          onError={(e) => e.target.src = fallbackImage}
        />
        <CardContent className="card-content">
          <Typography variant="body2" color="textSecondary" className="card-course">
            3 course meal + drink
          </Typography>
          <Typography variant="h6" className="card-title">{meal.title}</Typography>
          <Typography variant="body2" color="textSecondary" className="card-description">
            <strong>Starter:</strong> {meal.starter}
          </Typography>
          <Typography variant="body2" color="textSecondary" className="card-description">
            <strong>Desert:</strong> {meal.desert}
          </Typography>
          <Typography variant="body2" color="textSecondary" className="card-description">
            <strong>Selected drink:</strong> {selectedDrink || 'None'}
          </Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
            <div className="drink-icons">
              {meal.drinks.map(drink => (
                <img
                  key={drink.id}
                  src={drink.icon}
                  alt={drink.title}
                  className={`drink-icon ${selectedDrink === drink.title ? 'selected' : ''}`}
                  onClick={() => setSelectedDrink(drink.title)}
                />
              ))}
            </div>
            <Typography variant="h6" color="textPrimary" className="card-price">{meal.price}€</Typography>
          </Box>
          <Button variant="outlined" color="primary" className="select-meal-button" onClick={handleSelectMeal}>
            Select
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
};

export default MealItem;
