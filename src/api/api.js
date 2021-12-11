import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:3030'
});

const loginAccount = (uid, token) => instance.post('/account/login', { uid, token });

export default { loginAccount };