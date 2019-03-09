import * as TYPES from './action_types';

export const addIngredient = (ingredient) => ({
    type: TYPES.ADD_INGREDIENT,
    payload: {
        ingredient: ingredient
    }
});
export const addAmount = (amount) => ({
    type: TYPES.ADD_AMOUNT,
    payload: {
        amount: amount
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
export const updateSearchType = (searchType) => ({
    type: TYPES.UPDATE_SEARCH_TYPE,
    payload: {
        searchType: searchType
    }
});