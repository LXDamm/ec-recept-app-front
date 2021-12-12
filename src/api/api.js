import axios from 'axios';

/**
 * Axios API
 * Use to send requests to backend
 */

export const instance = axios.create({
    baseURL: 'http://localhost:3030'
});

const loginAccount = (uid, token) => instance.post('/account/login', { uid, token });

export default { loginAccount };