import React from 'react';
import MealItem from './MealItem';
import '../assets/css/MealList.css';

const MealList = ({ meals, selectedMeals, setSelectedMeals, selectedTags }) => {
  const filteredMeals = meals.filter(meal => selectedTags.length === 0 || selectedTags.some(tag => meal.labels.includes(tag)));

  return (
    <div className="meal-list">
      {filteredMeals.map(meal => (
        <MealItem key={meal.id} meal={meal} selectedMeals={selectedMeals} setSelectedMeals={setSelectedMeals} />
      ))}
    </div>
  );
};

export default MealList;
