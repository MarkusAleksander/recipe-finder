import * as TYPES from '../actions/action_types';

import { initialState } from './../state';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ADD_INGREDIENT:
            console.log('Add ingredient...');
            let cUI_I = state.currentUserIngredient;
            cUI_I.ingredient_id = action.payload.ingredient_id;
            return Object.assign({}, state, {
                currentUserIngredient: cUI_I
            });
        case TYPES.ADD_QUANTITY:
            console.log('Add quantity...');
            let cUI_Qty = state.currentUserIngredient;
            cUI_Qty.amount = action.payload.quantity;
            return Object.assign({}, state, {
                currentUserIngredient: cUI_Qty
            });
        case TYPES.ADD_QUANTIFIER:
            console.log('Add quantifier...');
            let cUI_Qfr = state.currentUserIngredient;
            cUI_Qfr.quantifier = action.payload.quantifier;
            return Object.assign({}, state, {
                currentUserIngredient: cUI_Qfr
            });
        case TYPES.STORE_USER_INGREDIENT:
            console.log('Storing user ingredient input');
            let cUI = state.currentUserIngredient;
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