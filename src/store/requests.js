import axios from 'axios';

export default {
  async getJson(url) {
    return axios.get(url)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
  },

  async postJson(url, data) {
    return axios.post(url, data)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
  },

  async putJson(url, data) {
    return axios.put(url, data)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
  },

  async deleteJson(url, data) {
    // console.log(data);
    return axios.delete(url, data)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
  },
};
