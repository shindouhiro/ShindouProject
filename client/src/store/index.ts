// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import userReducer from './userSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
