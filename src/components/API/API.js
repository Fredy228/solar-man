import axios from 'axios';

axios.defaults.baseURL = 'https://solarman.pro';

export const sendPhoneToTelegram = async client => {
  const response = await axios.post('/api/phone-send/telegram', client);
  return response.data;
};
