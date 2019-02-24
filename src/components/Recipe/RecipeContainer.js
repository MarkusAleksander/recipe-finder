import React, { Component } from 'react';
import { IngredientContainer } from './../Ingredient/IngredientContainer';

import { store } from '../../store/store';

class RecipeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipe: {}
        }
    }

    componentDidMount() {
        this.setState({
            recipe: getRecipeIngredients(this.props.id)
        });
    }

    render() {

        return (
            <div>
                {
                    this.state.recipe.id !== null &&
                    <div><IngredientContainer id={this.state.recipe.id} ></IngredientContainer></div>
                }
            </div>
        )
    }
}

function getRecipeIngredients(id) {
    return store.getState().recipes.find(function (x) { return x.id === id });
}

export default RecipeContainer;