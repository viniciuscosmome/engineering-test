import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { iUserState } from './user.types';
import type { iRootState } from '../redux/stores';

const initialState: iUserState = {
  username: null,
  isLogged: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, { payload }: PayloadAction<iUserState>) {
      const { username, isLogged } = payload;
      state.username = username;
      state.isLogged = isLogged;
    },
    logout(state) {
      const { username, isLogged } = initialState;
      state.username = username;
      state.isLogged = isLogged;
    },
  }
});

export const selectUser = ({ user }: iRootState) => user;

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
