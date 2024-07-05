import { createReducer } from '@reduxjs/toolkit';
import { setUserSubscription} from './actions';

interface UserSubscriptionState {
  userSubscription: string[];
}

const initialState: UserSubscriptionState = {
  userSubscription: []
};

const userSubscriptionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUserSubscription, (state, action) => {
      state.userSubscription = action.payload;
    })
});

export default userSubscriptionReducer;
