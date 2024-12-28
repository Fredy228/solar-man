import { $api, $apiAdmin } from './base.api';

export const getPosts = async (limit = 20, page = 1) => {
  const response = await $api.get(
    `/api/admin/portfolio?limit=${limit}&page=${page}`
  );
  return response.data;
};

export const getPostsById = async id => {
  const response = await $api.get(`/api/admin/portfolio/${id}`);
  return response.data;
};

export const deletePosts = async id => {
  const response = await $apiAdmin.delete(`/api/admin/portfolio/${id}`);
  return response.data;
};

export const deletePostImage = async (id, urlMini) => {
  const response = await $apiAdmin.patch(`/api/admin/portfolio/image/${id}`, {
    urlMini,
  });
  return response.data;
};

export const createPosts = async (title, year, components, photo, gallery) => {
  const formData = new FormData();

  formData.append('title', title);
  formData.append('year', year);
  formData.append('components', JSON.stringify(components));
  formData.append('photo', photo);
  gallery.map(({ file }) => {
    return formData.append('gallery', file);
  });

  const response = await $apiAdmin.post(`/api/admin/portfolio`, formData);
  return response.data;
};

export const updatePosts = async (
  id,
  title,
  year,
  components,
  photo,
  gallery
) => {
  const formData = new FormData();

  formData.append('title', title);
  formData.append('year', year);
  formData.append('components', JSON.stringify(components));
  formData.append('photo', photo);
  gallery.map(({ file }) => {
    return formData.append('gallery', file);
  });

  const response = await $apiAdmin.patch(
    `/api/admin/portfolio/${id}`,
    formData
  );
  return response.data;
};

export const updateOrderPosts = async objects => {
  const response = await $apiAdmin.post(`/api/admin/portfolio/order`, objects);
  return response.data;
};
