import api from "../api/api";

export const getAllRecipes = async () => {
    const data = await api.getAllRecipes();
    return data.data;
};

export const getRecipe = async (id) => {
    const data = await api.getRecipe(id);
    return data.data;
}