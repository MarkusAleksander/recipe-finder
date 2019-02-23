import * as TYPES from './action_types';

export const getIngredients = (recipe_id) => ({
    type: TYPES.GET_INGREDIENTS,
    payload: {
        recipe_id: recipe_id
    }
})

export const addIngredient = (ingredient) => ({
    type: TYPES.ADD_INGREDIENT,
    payload: {
        ingredient: ingredient
    }
});

export const getRecipes = () => ({
    type: TYPES.GET_RECIPES
});

export const getRecipe = (recipe_id) => ({
    type: TYPES.GET_RECIPE,
    payload: {
        recipe_id: recipe_id
    }
})