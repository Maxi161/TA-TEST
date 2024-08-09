const axios = require("axios");
require("dotenv").config();

const API_MAIN = process.env.API_MAIN;
const API_RESPALDO = process.env.API_RESPALDO;

module.exports = {
  recoveryService: async () => {
    try {
      const res = await axios.get(API_MAIN);
      return res;
    } catch (error) {
      try {
        const resRespado = await axios.get(API_RESPALDO);
        return resRespado;
      } catch (err) {
        throw err;
      }
    }
  },
};
