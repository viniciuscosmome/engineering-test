import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import type { iRootState } from '../../redux/stores';
import { PostsRequest } from '../api/';

const initialState: iPostState = {
  loading: false,
  data: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
};

export const fetchPostsDataAsync = createAsyncThunk(
  'posts/fetchPosts',
  PostsRequest.loadPosts,
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearPosts: (state) => {
      state.loading = false;
      state.data = {...initialState.data};
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPostsDataAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPostsDataAsync.fulfilled, (state, { payload }: PayloadAction<iApiPosts | void>) => {
        state.loading = false;

        if (payload) {
          const oldPosts = state.data.results;
          const newPosts = payload.results.filter(newPost => !oldPosts.some(oldPost => oldPost.id === newPost.id));
          const posts = [...oldPosts, ...newPosts];

          state.data = {...payload, results: posts};
        }
      })
      .addCase(fetchPostsDataAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectPosts = ({ posts }: iRootState) => posts;

export const { clearPosts } = postsSlice.actions;
export default postsSlice.reducer;
