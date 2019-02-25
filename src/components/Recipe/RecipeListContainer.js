import React, { Component } from 'react';
import RecipeContainer from './RecipeContainer';

import { store } from '../../store/store';

class RecipeListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // List of recipes to be held by the component
            recipes: []
        }
    }

    componentDidMount() {
        // When the component mounts - get the recipes
        this.setState({
            recipes: getRecipes()
        });
    }

    render() {
        return (
            <ul>
                {this.state.recipes.map(function (item) {
                    // Render a Recipe Container for each Recipe
                    return <li><RecipeContainer recipe={item} key={item.id}></RecipeContainer></li>
                })}
            </ul>
        )
    }
}

function getRecipes() {
    // Get recipes from the store
    return store.getState().recipes;
}

export default RecipeListContainer;