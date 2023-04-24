import { api, fetcher, handleError } from './config';

const postsLimit = 15;

export const PostsRequest = {
  loadPosts: async (round = 0): Promise<iApiPosts | void> => {
    const params = {
      limit: postsLimit,
      offset: postsLimit * round,
    };
    const [error, result] = await fetcher(api.get('', { params }));

    if (error) {
      return handleError(error);
    }

    if (result.status >= 200 && result.status < 300) {
      return result.data;
    }
  },
  createPost: async (payload: iApiCreatePost): Promise<iPostProps | void> => {
    const { username, title, content } = payload;
    const data = {
      username,
      title,
      content
    };
    const [error, result] = await fetcher(api.post('', data));

    if (error) {
      return handleError(error);
    }

    if (result.status >= 200 && result.status < 300) {
      return result.data;
    }
  },
};
