import * as TYPES from '../actions/action_types';
import { EDITINGSTATES } from '../userEditingStates';

import { initialState } from './../state';


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ADD_INGREDIENT:
            console.log('Add ingredient...');
            return {
                ...state,
                currentUserIngredient: {
                    ...state.currentUserIngredient,
                    ingredient_id: action.payload.ingredient_id,
                    editState: EDITINGSTATES.EDITING
                }
            }
        case TYPES.ADD_QUANTITY:
            console.log('Add quantity...');
            return {
                ...state,
                currentUserIngredient: {
                    ...state.currentUserIngredient,
                    amount: Number(action.payload.quantity),
                    editState: EDITINGSTATES.EDITING
                }
            }
        case TYPES.ADD_QUANTIFIER:
            console.log('Add quantifier...');
            return {
                ...state,
                currentUserIngredient: {
                    ...state.currentUserIngredient,
                    quantifier: action.payload.quantifier,
                    editState: EDITINGSTATES.EDITING
                }
            }
        case TYPES.STORE_USER_INGREDIENT:
            console.log('Storing user ingredient input');
            let cUI = state.currentUserIngredient;
            cUI.editState = EDITINGSTATES.SUBMITTED;
            let uI = state.userIngredients.slice();
            uI.push(cUI);
            return Object.assign({}, state, {
                userIngredients: uI,
                currentUserIngredient: {
                    id: cUI.id + 1,
                    ingredient_id: 0,
                    quantity: 0,
                    quantifier: ''
                }
            });
        default:
            return state;
    }
}