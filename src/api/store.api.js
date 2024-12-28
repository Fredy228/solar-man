import { $api, $apiAdmin } from './base.api';

export const createStoreSets = async formData => {
  const response = await $apiAdmin.post(`/api/admin/store-sets`, formData);
  return response.data;
};

export const createStoreComponents = async formData => {
  const response = await $apiAdmin.post(
    `/api/admin/store-components`,
    formData
  );
  return response.data;
};

export const updateStoreSets = async (formData, id) => {
  const response = await $apiAdmin.patch(
    `/api/admin/store-sets/by-id/${id}`,
    formData
  );
  return response.data;
};

export const updateStoreComponents = async (formData, id) => {
  const response = await $apiAdmin.patch(
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
  const response = await $api.get(
    `/api/admin/store-sets?page=${page}&limit=${limit}&type=${type}&sort=${sort}`
  );
  return response.data;
};

export const getSetsHomeOrder = async ({ limit, page }) => {
  const response = await $api.get(`/api/admin/store-sets/home-sets`, {
    params: {
      limit,
      page,
    },
  });
  return response.data;
};

export const updateSetsHomeOrder = async objects => {
  const response = await $apiAdmin.post(
    `/api/admin/store-sets/home-sets`,
    objects
  );
  return response.data;
};

export const toggleSetsHome = async id => {
  const response = await $apiAdmin.patch(
    `/api/admin/store-sets/home-sets/${id}`
  );
  return response.data;
};

export const getStoreComponents = async (
  page = 1,
  limit = 12,
  type = 'Всі',
  sort = 'none',
  selectedValues
) => {
  const optionSort = Object.keys(selectedValues).map(
    i => `${i}=${selectedValues[i].join('_')}`
  );

  const response = await $api.get(
    `/api/admin/store-components?page=${page}&limit=${limit}&type=${type}&sort=${sort}&${optionSort.join(
      '&'
    )}`
  );
  return response.data;
};

export const deleteStoreSet = async id => {
  const response = await $apiAdmin.delete(`/api/admin/store-sets/by-id/${id}`);
  return response.data;
};
export const deleteStoreComponent = async id => {
  const response = await $apiAdmin.delete(
    `/api/admin/store-components/by-id/${id}`
  );
  return response.data;
};

export const deletePdfStoreComponent = async id => {
  const response = await $apiAdmin.delete(
    `/api/admin/store-components/pdf-by-id/${id}`
  );
  return response.data;
};

export const deleteDescripPhotoComponent = async (id, urlDel) => {
  const response = await $apiAdmin.patch(
    `/api/admin/store-components/delete-descrip-photo/${id}`,
    { urlDel }
  );
  return response.data;
};

export const getByIdStoreSet = async id => {
  const response = await $api.get(`/api/admin/store-sets/by-id/${id}`);
  return response.data;
};
export const getByIdStoreComponent = async id => {
  const response = await $api.get(`/api/admin/store-components/by-id/${id}`);
  return response.data;
};

export const getFilterStoreComponent = async type => {
  const response = await $api.get(
    `/api/admin/store-components/option?type=${type}`
  );
  return response.data;
};
