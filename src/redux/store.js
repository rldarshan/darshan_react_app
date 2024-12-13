import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter_slice';

// Store
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
