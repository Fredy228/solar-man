import { $api } from './base.api';

export const sendPhoneToTelegram = async client => {
  const response = await $api.post('/phone-send/telegram', client);
  return response.data;
};

export const sendQuizToTelegram = async (client, source) => {
  const response = await $api.post('/phone-send/quiz', client, {
    params: {
      ...source,
    },
  });
  return response.data;
};
