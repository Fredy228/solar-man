import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// axios.defaults.baseURL = 'https://solarman.pro';
axios.defaults.baseURL = 'http://localhost:3001';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const sendPhoneToTelegram = async client => {
  const response = await axios.post('/api/phone-send/telegram', client);
  return response.data;
};

export const loginUser = async credentials => {
  const response = await axios.post('/api/admin/login', credentials);
  setAuthHeader(response.data.user.token);
  return response.data.user;
};

export const checkAuth = async () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  setAuthHeader(token);

  try {
    const response = await axios.get('/api/admin/check-auth');
    return response.data.status;
  } catch (error) {
    return false;
  }
};

export const logoutUser = async () => {
  const token = localStorage.getItem('token');
  if (!token) return new Error('Not authorization');

  setAuthHeader(token);

  try {
    await axios.post('/api/admin/logout');
    clearAuthHeader();
    localStorage.setItem('token', '');
    localStorage.setItem('userData', '');
  } catch (error) {
    Notify.failure(`${error.message}`);
    return error.message;
  }
};
