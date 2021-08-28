import axios from 'axios';


const fetch = (url, method, param1, param2, param3) => {
  return new Promise((resolve, reject) => {
    axios[method](url, param1, param2, param3)
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


export default fetch;
