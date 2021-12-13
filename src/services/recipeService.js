import api from "../api/api";

export const getAllRecipes = async () => {
    const data = await api.get('/recipe');
    if (data.status === 200) return data.data;
    else return false;
};

export const getRecipe = async (id) => {
    const data = await api.get(`/recipe/${id}`);
    if (data.status === 200) return data.data;
    else return false;
}

export const getRecipesByUser = async (id) => {
    const data = await api.get(`/recipe/user/${id}`);
    if (data.status === 200) return data.data;
    else return false;
}