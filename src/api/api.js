import axios from 'axios';

/**
 * Axios API
 * Use to send requests to backend
 */

const api = axios.create({
    baseURL: 'http://localhost:3030'
});

export default api;