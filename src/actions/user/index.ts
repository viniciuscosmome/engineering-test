import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { iRootState } from '../../redux/stores';

const STORAGE_KEY = 'session.config';

const getInitialState = (): iUserState => {
  const localData = localStorage.getItem(STORAGE_KEY);
  const result = {
    username: null,
    remember: false,
    isLogged: false,
  };

  if (localData) {
    const data = JSON.parse(localData);

    result.username = data.username || null;
    result.remember = data.remember || false;
    result.isLogged = data.isLogged || false;
  }

  return result;
};

const userSlice = createSlice({
  name: 'user',
  initialState: getInitialState(),
  reducers: {
    login(state, { payload }: PayloadAction<iUserState>) {
      const { username, remember, isLogged } = payload;
      state.username = username;
      state.remember = remember;
      state.isLogged = isLogged;

      if (remember) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({...state}));
      }
    },
    logout(state) {
      state.username = null;
      state.remember = false;
      state.isLogged = false;
      localStorage.removeItem(STORAGE_KEY);
    },
  }
});

export const selectUser = ({ user }: iRootState) => user;

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
