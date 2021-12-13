import axios from 'axios';

/**
 * Axios API
 * Use to send requests to backend
 */

export const instance = axios.create({
    baseURL: 'http://localhost:3030'
});

const loginAccount = (id, token) => instance.post('/account/login', {
    id,
    token
});
const registerAccount = (username, email, userId) => instance.post('/account/create', {
    username,
    email,
    userId
})
const getAllRecipes = () => instance.get('/recipe');
const getRecipe = (id) => instance.get(`/recipe/${id}`);
/* const getRecipeByUser = (id) => instance.get(`/recipe/user/${userid}`);
 */
export default {
    loginAccount,
    registerAccount,
    getAllRecipes,
    getRecipe,
    
};