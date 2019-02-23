import React, { Component } from 'react';
import Ingredient from './Ingredient';

import { store } from '../../store/store';

class IngredientContainer extends Component {

    render() {
        return (
            <Ingredient ingredient={store.getState().ingredient}></Ingredient>
        )
    }

}

export default IngredientContainer;