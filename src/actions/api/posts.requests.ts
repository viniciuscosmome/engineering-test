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

    return;
  },
};
