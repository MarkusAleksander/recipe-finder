import * as TYPES from '../actions/action_types';

import { initialState } from './../state';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_INGREDIENTS:
            console.log('Getting ingredients...');
            return {
                ...state,
            };
        case TYPES.ADD_INGREDIENT:
            //do something
            return;
        case TYPES.GET_RECIPE:
            //
            return;
        case TYPES.GET_RECIPES:
            return;
        default:
            return state;
    }
}