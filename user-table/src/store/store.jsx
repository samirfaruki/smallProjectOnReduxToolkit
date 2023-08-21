import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/userSlice'; // Replace with the actual path to your userSlice reducer

const store = configureStore({
  reducer: {
    user: userSlice // Add the userSlice reducer to the store
    // You can add more reducers here if needed
  }
});

export default store;
