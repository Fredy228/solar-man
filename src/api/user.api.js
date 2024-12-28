import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { $apiAdmin } from './base.api';

export const getUsers = async () => {
  const response = await $apiAdmin.get('/admin/users');
  return response.data;
};

export const deleteUsers = async (role, id) => {
  if (role !== 'admin') return Notify.failure(`У вас має прав видяляти User`);

  const response = await $apiAdmin.post(`/admin/delete/${id}`);
  return response.data;
};

export const editRoleUsers = async (role, id, roleUp) => {
  if (role !== 'admin') return Notify.failure(`У вас має прав видяляти User`);

  const response = await $apiAdmin.patch(`/admin/update-role/${id}`, {
    role: roleUp,
  });
  return response.data.user;
};

export const updateUser = async (name, email) => {
  if (name)
    return await $apiAdmin.patch(`/admin/update-me`, {
      name: name.trim(),
    });
  if (email)
    return await $apiAdmin.patch(`/admin/update-me`, {
      email: email.trim(),
    });
};

export const updatePass = async (password, newPass) => {
  const response = await $apiAdmin.patch(`/admin/update-pass`, {
    password,
    newPass,
  });
  return response.data;
};

export const createUser = async (name, password, role) => {
  const response = await $apiAdmin.post(`/admin/register`, {
    password: password.trim(),
    name: name.trim(),
    role,
  });
  return response.data;
};
