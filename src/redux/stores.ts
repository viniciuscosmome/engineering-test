import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../actions/user';
import postsReducer from '../actions/posts';

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
  },
});

export type iRootState = ReturnType<typeof store.getState>;
export type iAppDispatch = typeof store.dispatch;
export default store;
