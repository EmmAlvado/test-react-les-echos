import { createAction } from '@reduxjs/toolkit';

export const setUserSubscription = createAction<string[]>('userSubscription/setUserSubscription');
