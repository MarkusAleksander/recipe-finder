import * as TYPES from '../actions/action_types';

import { initialState } from './../state';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ADD_INGREDIENT:
            console.log('Add ingredient...');
            const cUI_I = state.currentUserIngredient;
            cUI_I.ingredient = action.payload.ingredient;
            return Object.assign({}, state, {
                currentUserIngredient: cUI_I
            });
        case TYPES.ADD_QUANTITY:
            console.log('Add quantity...');
            const cUI_Qty = state.currentUserIngredient;
            cUI_Qty.quantity = action.payload.quantity;
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
        default:
            return state;
    }
}