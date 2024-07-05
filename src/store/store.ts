import { configureStore } from '@reduxjs/toolkit';
import userSubscriptionReducer from './reducer';

const store = configureStore({
  reducer: {
    userSubscription: userSubscriptionReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
