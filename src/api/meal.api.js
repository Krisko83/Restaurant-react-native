import api from "./api";


export async function getAll() {
    const response = await api.get('meals');

    return response.data;
}

export async function getMealsByCategory(categoryId) {
    const response = await api.get(`meals?category_id=eq.${categoryId}`)

    return response.data;
} 

export async function getMealById(mealId) {
    const response = await api.get(`meals?id=eq.${mealId}`);
    
    return response.data;
}