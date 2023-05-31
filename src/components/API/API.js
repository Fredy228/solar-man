import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://solarman.pro';

axios.defaults.baseURL = baseURL;

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
  if (!token) {
    Notify.warning('Увійдіть в обліковий запис');
    return false;
  }

  setAuthHeader(token);

  try {
    const response = await axios.get('/api/admin/check-auth');
    return response.data.status;
  } catch (error) {
    Notify.warning('Ваша сессия закінчилась або ваш токен невірний');
    return false;
  }
};

const checkSetAuth = () => {
  const token = localStorage.getItem('token');
  if (!token) return Notify.failure(`Увійдіть в обліковий запис`);
  try {
    setAuthHeader(token);
  } catch (err) {
    Notify.warning(`Ваша сесія закончилась або ваш токен невірний`);
  }
};

export const logoutUser = async () => {
  checkSetAuth();

  try {
    await axios.post('/api/admin/logout');
    clearAuthHeader();
    localStorage.setItem('token', '');
    localStorage.setItem('userData', '');
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
};

export const getUsers = async () => {
  checkSetAuth();

  const response = await axios.get('/api/admin/users');

  return response.data;
};

export const deleteUsers = async (role, id) => {
  checkSetAuth();

  if (role !== 'admin') return Notify.failure(`У вас має прав видяляти User`);

  const response = await axios.post(`/api/admin/delete/${id}`);

  return response.data;
};

export const editRoleUsers = async (role, id, roleUp) => {
  checkSetAuth();

  if (role !== 'admin') return Notify.failure(`У вас має прав видяляти User`);

  const response = await axios.patch(`/api/admin/update-role/${id}`, {
    role: roleUp,
  });

  return response.data.user;
};

export const updateUser = async (name, email) => {
  checkSetAuth();

  if (name)
    return await axios.patch(`/api/admin/update-me`, {
      name: name.trim(),
    });
  if (email)
    return await axios.patch(`/api/admin/update-me`, {
      email: email.trim(),
    });
};

export const updatePass = async (password, newPass) => {
  checkSetAuth();

  const response = await axios.patch(`/api/admin/update-pass`, {
    password,
    newPass,
  });
  return response.data;
};

export const createUser = async (name, password, role) => {
  checkSetAuth();

  const response = await axios.post(`/api/admin/register`, {
    password: password.trim(),
    name: name.trim(),
    role,
  });

  console.log(response);
  return response.data;
};

export const getPosts = async (limit = 20, page = 1) => {
  const response = await axios.get(
    `/api/admin/portfolio?limit=${limit}&page=${page}`
  );
  return response.data;
};

export const getPostsById = async id => {
  const response = await axios.get(`/api/admin/portfolio/${id}`);
  return response.data;
};

export const deletePosts = async id => {
  checkSetAuth();

  const response = await axios.delete(`/api/admin/portfolio/${id}`);
  return response.data;
};

export const createPosts = async (title, year, components, photo) => {
  checkSetAuth();

  const formData = new FormData();

  formData.append('title', title);
  formData.append('year', year);
  formData.append('components', JSON.stringify(components));
  formData.append('photo', photo);

  const response = await axios.post(`/api/admin/portfolio`, formData);
  return response.data;
};

export const updatePosts = async (id, title, year, components, photo) => {
  checkSetAuth();

  const formData = new FormData();

  formData.append('title', title);
  formData.append('year', year);
  formData.append('components', JSON.stringify(components));
  formData.append('photo', photo);

  const response = await axios.patch(`/api/admin/portfolio/${id}`, formData);
  return response.data;
};

export const updateOrderPosts = async objects => {
  checkSetAuth();

  const response = await axios.post(`/api/admin/portfolio/order`, objects);
  return response.data;
};

export const createStoreSets = async formData => {
  checkSetAuth();

  const response = await axios.post(`/api/admin/store-sets`, formData);
  return response.data;
};

export const createStoreComponents = async formData => {
  checkSetAuth();

  const response = await axios.post(`/api/admin/store-components`, formData);
  return response.data;
};

export const updateStoreSets = async (formData, id) => {
  checkSetAuth();

  const response = await axios.patch(
    `/api/admin/store-sets/by-id/${id}`,
    formData
  );
  return response.data;
};

export const updateStoreComponents = async (formData, id) => {
  checkSetAuth();

  const response = await axios.patch(
    `/api/admin/store-components/by-id/${id}`,
    formData
  );
  return response.data;
};

export const getStoreSets = async (
  page = 1,
  limit = 12,
  type = 'Всі',
  sort = 'none'
) => {
  const response = await axios.get(
    `/api/admin/store-sets?page=${page}&limit=${limit}&type=${type}&sort=${sort}`
  );
  return response.data;
};

export const getStoreComponents = async (
  page = 1,
  limit = 12,
  type = 'Всі',
  sort = 'none',
  optionSort
) => {
  const response = await axios.get(
    `/api/admin/store-components?page=${page}&limit=${limit}&type=${type}&sort=${sort}`
  );
  return response.data;
};

export const deleteStoreSet = async id => {
  checkSetAuth();

  const response = await axios.delete(`/api/admin/store-sets/by-id/${id}`);
  return response.data;
};
export const deleteStoreComponent = async id => {
  checkSetAuth();

  const response = await axios.delete(
    `/api/admin/store-components/by-id/${id}`
  );
  return response.data;
};

export const getByIdStoreSet = async id => {
  const response = await axios.get(`/api/admin/store-sets/by-id/${id}`);
  return response.data;
};
export const getByIdStoreComponent = async id => {
  const response = await axios.get(`/api/admin/store-components/by-id/${id}`);
  return response.data;
};

export const getFilterStoreComponent = async type => {
  const response = await axios.get(
    `/api/admin/store-components/option?type=${type}`
  );
  return response.data;
};
