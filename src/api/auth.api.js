import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { remove } from 'local-storage';

import { $api, $apiAdmin } from './base.api';

export const loginUser = async credentials => {
  const response = await $api.post('/api/admin/login', credentials);
  return response.data.user;
};

export const checkAuth = async () => {
  try {
    const response = await $apiAdmin.get('/api/admin/check-auth');
    return response.data.status;
  } catch (error) {
    Notify.warning('Ваша сессия закінчилась або ваш токен невірний');
    return false;
  }
};

export const logoutUser = async () => {
  try {
    await $apiAdmin.post('/api/admin/logout');
    remove('token');
    remove('userData');
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
};
