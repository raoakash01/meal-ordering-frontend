import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Box } from '@mui/material';
import MealList from './components/MealList';
import UserSelector from './components/UserSelector';
import TagFilter from './components/TagFilter';
import TotalPrice from './components/TotalPrice';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [labels, setLabels] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState({});
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/meals')
      .then(response => {
        setMeals(response.data);
        const uniqueLabels = [...new Set(response.data.flatMap(meal => meal.labels))];
        setLabels(uniqueLabels.map(label => ({ id: label, label })));
      })
      .catch(error => console.error('Error fetching meals:', error));
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        {/* Left side */}
        <Grid item xs={12} md={8}>
          <Box pr={{ xs: 0, md: 2 }}>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <TagFilter labels={labels} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
              </Grid>
              <Grid item>
                <MealList meals={meals} selectedMeals={selectedMeals} setSelectedMeals={setSelectedMeals} selectedTags={selectedTags} />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Right side */}
        <Grid item xs={12} md={4}>
          <Box pl={{ xs: 0, md: 2 }}>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <UserSelector selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
              </Grid>
              <Grid item>
                <TotalPrice selectedMeals={selectedMeals} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
