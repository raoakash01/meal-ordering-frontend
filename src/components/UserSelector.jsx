import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import '../assets/css/UserSelector.css';

const UserSelector = ({ selectedUser, setSelectedUser }) => {
  const users = [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }];

  return (
    <FormControl fullWidth>
      <InputLabel>User</InputLabel>
      <Select value={selectedUser} onChange={e => setSelectedUser(e.target.value)}>
        {users.map(user => (
          <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default UserSelector;
