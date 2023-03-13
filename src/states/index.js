import { configureStore } from '@reduxjs/toolkit';

// Reducer
import authUserReducer from './authUser/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    users: usersReducer,
    authUser: authUserReducer,
    threads: threadsReducer,
  }
});

export default store;
