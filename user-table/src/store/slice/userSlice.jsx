import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [] // Initialize an empty array for users
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload); // Add a new user to the users array
    },
    deleteUser: (state, action) => {
      const userIdToDelete = action.payload;
      state.users = state.users.filter(user => user.id !== userIdToDelete); // Delete a user by filtering out the specified user
    },
    deleteAllUsers: state => {
      state.users = []; // Clear the users array to delete all users
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  addUser,
  deleteUser,
  deleteAllUsers
} = userSlice.actions;

export default userSlice.reducer;
