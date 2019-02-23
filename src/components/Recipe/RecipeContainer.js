import React, { Component } from 'react';
import { IngredientContainer } from './../Ingredient/IngredientContainer';

import { store } from '../../store/store';

class RecipeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipe_id: 1,
            recipe: {},
            ingredients: []
        }
    }

    componentDidMount() {
        this.setState({
            recipe: getRecipeIngredients(this.state.recipe_id)
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.recipe.id}</p>
                <IngredientContainer></IngredientContainer>
            </div>
        )
    }
}

function getRecipeIngredients(id) {
    return store.getState().recipes.find(function (x) { return x.id === id });
}

export default RecipeContainer;