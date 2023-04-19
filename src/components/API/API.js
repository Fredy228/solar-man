import axios from 'axios';

axios.defaults.baseURL = 'http://194.61.53.93:3000';

export const sendPhoneToTelegram = async client => {
  const response = await axios.post('/api/phone-send/telegram', client);
  return response.data;
};
