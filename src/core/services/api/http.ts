import Axios from 'axios';

const http = Axios.create({
  baseURL: process.env.REACT_APP_URL,
});

export default http;
