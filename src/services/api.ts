import axios from 'axios';

const api = axios.create({
  baseURL: 'https://full-tracker-back.vercel.app/',
});

export default api;
