import { api, fetcher, handleError, postsLimit } from './config';

export const PostsRequest = {
  loadPosts: async (round = 0): Promise<iApiPosts | void> => {
    const params = { offset: postsLimit * round };
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
