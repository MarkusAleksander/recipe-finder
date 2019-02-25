import React, { Component } from 'react';
//import { IngredientContainer } from './../Ingredient/IngredientContainer';
import Recipe from './Recipe';

//import { store } from '../../store/store';

class RecipeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipe: this.props.recipe
        }
    }

    // componentDidMount() {
    //     this.setState({
    //         ingredients: getRecipeIngredients(this.state.recipe.id)
    //     });
    // }

    render() {

        return (
            <div>
                <Recipe recipe={this.state.recipe}></Recipe>
            </div>
        )
    }
}

// function getRecipeIngredients(id) {
//     return store.getState().recipes.find(function (x) { return x.id === id });
// }

export default RecipeContainer;