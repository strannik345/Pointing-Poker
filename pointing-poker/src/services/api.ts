import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://shielded-plains-14826.herokuapp.com/',
  timeout: 5000,
});

export default axiosInstance;