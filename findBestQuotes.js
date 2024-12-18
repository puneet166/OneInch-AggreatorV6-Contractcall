// const axios = require("axios");
import axios from "axios";
async function httpCall() {

  const url = "https://api.1inch.dev/swap/v6.0/137/quote";

  const config = {
      headers: {
  "Authorization": "Bearer vx5ooxUqq9zlzPX88MxfDF0pOe297iXI"
},
      params: {
  "src": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
  "dst": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  "amount": "1000",
  "fee": "1"
},
      paramsSerializer: {
        indexes: null
      }
  };
  

  try {
    const response = await axios.get(url, config);
    console.log("-------------line no -------------",response.data);
  } catch (error) {
    console.error(error);
  }
}
await httpCall();