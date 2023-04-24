import Axios, { AxiosError, AxiosPromise } from 'axios';

const postsLimit = 15;

const api = Axios.create({
  baseURL: 'https://dev.codeleap.co.uk/careers/',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    limit: postsLimit,
  },
});

const fetcher = (promise: AxiosPromise) => promise
  .then((response) => [null, response])
  .catch(({ response }) => [response]);

// ? handle error
const handleError = (error: AxiosError): void => {
  return console.error('ApiHandleError:', error);
};

export {
  api,
  fetcher,
  handleError,
  postsLimit,
};
