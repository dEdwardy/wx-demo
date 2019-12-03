import Abi from './miniprogram_npm/wx-axios-promise/index.js';
const API = Abi();

const token = wx.getStorageSync('token');
API.interceptors.request.use((config) => {
  if(token) {
    console.log(token)
    let auth = { Authorization: `Bearer ${token}` }
    // config.header['Authorization'] = `Bearer ${token}`;
    config.header = {
      ...config.header,
      ...auth
    }
  }
  return config;
}, (err) => {
  return Promise.reject(err)
})
API.interceptors.response.use((res) => {
  return res;
}, (err) => {
  return Promise.reject(err)
})

export default API;