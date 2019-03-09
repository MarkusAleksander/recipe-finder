import * as TYPES from '../actions/action_types';

import { initialState } from './../state';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ADD_INGREDIENT:
            console.log('Add ingredient...');
            return {
                ...state,
                currentUserIngredient: {
                    ...state.currentUserIngredient,
                    ingredient: Number(action.payload.ingredient)
                }
            }
        case TYPES.ADD_AMOUNT:
            console.log('Add amount...');
            return {
                ...state,
                currentUserIngredient: {
                    ...state.currentUserIngredient,
                    amount: Number(action.payload.amount)
                }
            }
        case TYPES.ADD_QUANTIFIER:
            console.log('Add quantifier...');
            return {
                ...state,
                currentUserIngredient: {
                    ...state.currentUserIngredient,
                    quantifier: action.payload.quantifier
                }
            }
        case TYPES.STORE_USER_INGREDIENT:
            console.log('Storing user ingredient input');
            let cUI = state.currentUserIngredient;
            let uI = state.userIngredients.slice();
            uI.push(cUI);
            return Object.assign({}, state, {
                userIngredients: uI,
                currentUserIngredient: {
                    id: cUI.id + 1,
                    ingredient: 0,
                    quantity: 0,
                    quantifier: ''
                }
            })
        case TYPES.UPDATE_SEARCH_TYPE:
            console.log('Updating search type');
            return {
                ...state,
                searchType: action.payload.searchType
            }
        default:
            return state;
    }
}