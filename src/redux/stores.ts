import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../actions/user';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type iRootState = ReturnType<typeof store.getState>;
export type iAppDispatch = typeof store.dispatch;
export default store;
