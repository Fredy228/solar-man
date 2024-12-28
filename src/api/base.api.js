import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { get } from 'local-storage';

export const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://solarman.pro';

// 'http://192.168.31.58:3001'
//"http://localhost:3001"

axios.defaults.baseURL = baseURL;

export const $api = axios.create({
  baseURL,
});

export const $apiAdmin = axios.create({
  baseURL,
});

$apiAdmin.interceptors.request.use(config => {
  const token = get('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    Notify.failure(`Увійдіть в обліковий запис`);
    throw new Error(`Увійдіть в обліковий запис`);
  }
  return config;
});
