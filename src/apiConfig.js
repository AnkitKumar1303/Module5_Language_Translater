// apiConfig.js
import axios from 'axios';

const rapidAPIConfig = {
  headers: {
    'X-RapidAPI-Key': '1b9c7ad967mshf4c9e2e49b24821p1dcaf6jsn291e229158e0',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
  },
};

export const getLanguagesOptions = {
  method: 'GET',
  url: 'https://text-translator2.p.rapidapi.com/getLanguages',
  ...rapidAPIConfig,
};

export const translateOptions = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    ...rapidAPIConfig.headers,
  },
};
