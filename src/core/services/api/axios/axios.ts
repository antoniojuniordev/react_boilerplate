import Axios from 'axios';
import { retryRequest, authorization, redirectSession } from './interceptors';
import { getSession, destroySession } from 'core/services/storage';

const axios = Axios.create({
  baseURL: process.env.REACT_APP_URL,
});

retryRequest({ axios });
authorization({ axios, getSession });
redirectSession({ axios, destroySession });

export default axios;
