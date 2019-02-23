import { TYPE_GET_INGREDIENT } from '../actions/action_types';

import { initialState } from './../state';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE_GET_INGREDIENT:
            //do something
            break;
        case "deposit-money":
            //do something
            break;
        default:
            return state;
    }
}