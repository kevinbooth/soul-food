// Rename this to axios.js and place in your API Key

import axios from "axios";

export const https = axios.create({
  baseURL: `http://quotes.rest/bible/`
});

/* this is a deprecated API service
export const https = axios.create({
  baseURL: `https://api.scripture.api.bible/v1/`,
  headers: {
    "api-key": "YOUR-API-KEY"
  }
});
*/
