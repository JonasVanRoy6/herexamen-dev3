// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://examen-jonas.ddev.site/api/meubels', // Vervang door je Craft CMS basis-URL
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
