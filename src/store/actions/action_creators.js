import * as TYPES from './action_types';

export const addIngredient = (ingredient_id) => ({
    type: TYPES.ADD_INGREDIENT,
    payload: {
        ingredient_id: ingredient_id
    }
});
export const addQuantity = (quantity) => ({
    type: TYPES.ADD_QUANTITY,
    payload: {
        quantity: quantity
    }
});
export const addQuantifier = (quantifier) => ({
    type: TYPES.ADD_QUANTIFIER,
    payload: {
        quantifier: quantifier
    }
});
export const storeUserIngredient = () => ({
    type: TYPES.STORE_USER_INGREDIENT
});