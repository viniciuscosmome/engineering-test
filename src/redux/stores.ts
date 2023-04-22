import { configureStore } from '@reduxjs/toolkit';

import useSlice from '../actions/user.slice';

const store = configureStore({
  reducer: {
    user: useSlice,
  },
});

export type iRootState = ReturnType<typeof store.getState>;
export type iAppDispatch = typeof store.dispatch;
export default store;
