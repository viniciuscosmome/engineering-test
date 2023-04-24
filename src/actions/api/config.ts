import Axios, { AxiosError, AxiosPromise } from 'axios';

const api = Axios.create({
  baseURL: 'https://dev.codeleap.co.uk/careers/',
  headers: {
    'Content-Type': 'application/json',
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
};
