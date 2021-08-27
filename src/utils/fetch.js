import axios from 'axios';
import { getToken } from './storage';

const BASE_URL = (mode => {
  if (mode === 'production') return 'https://api.logeetrans.com';
  if (mode === 'staging') return 'https://stage-api.logeetrans.com';
  return 'https://dev-api.logeetrans.com';
})(process.env.MODE);

const BASIC_AUTH = { Authorization: 'Basic dGVsa29tOmRhMWMyNWQ4LTM3YzgtNDFiMS1hZmUyLTQyZGQ0ODI1YmZlYQ==' };
const BEARER_AUTH = { Authorization: `Bearer ${getToken()}` };

const fetch = (url, method, param1, param2) => {
  return new Promise((resolve, reject) => {
    axios[method](url, param1, param2)
      .then(res => resolve(res.data))
      .catch(err => {
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.'
        };
        if (!err.response) reject(defaultError);
        else if (!err.response.data) reject(defaultError);
        else reject(err.response.data);
      });
  });
};

export const loginUser = async data => (
  await fetch(`${BASE_URL}/user/v1/login`, 'post', data, { headers: BASIC_AUTH })
);

export const dashboard = async () => (
  await fetch(`${BASE_URL}/order/v1/admin-dashboard`, 'get', { headers: BEARER_AUTH })
);
