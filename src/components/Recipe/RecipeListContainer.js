import React, { Component } from 'react';
import RecipeContainer from './RecipeContainer';
import * as SEARCHTYPES from './../../store/search_types';

import { store } from '../../store/store';
import { connect } from 'react-redux';

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
            <div>
                <ul>
                    {this.props.recipes.map(function (item) {
                        // Render a Recipe Container for each Recipe
                        return <li key={item.id}><RecipeContainer recipe={item}></RecipeContainer></li>
                    })}
                </ul>
            </div>
        )
    }
}

function getRecipes() {
    // Get recipes from the store
    var currentUserIngredients = store.getState().userIngredients;

    return store.getState().recipes.filter(function (el) {
        el.ingredients.some(function () {
            return (el.ingredient === currentUserIngredients.ingredient) && (el.amount === currentUserIngredients.amount) && (el.quantifer === currentUserIngredients.quantifier)
        });
    });
}

const mapStateToProps = (state) => {
    var currentUserIngredients = store.getState().userIngredients;
    var searchType = store.getState().searchType;
    //debugger;
    var recipes;

    if (searchType === SEARCHTYPES.ALL) {
        recipes = store.getState().recipes;
    } else {
        recipes = store.getState().recipes.filter(function (el) {
            if (searchType === SEARCHTYPES.SOME) {
                // List recipes with SOME of the ingredients
                return el.ingredients.some(function (item) {
                    return currentUserIngredients.some(function (cUI) {
                        return (item.ingredient === cUI.ingredient) && (item.amount === cUI.amount) && (item.quantifier === cUI.quantifier)
                    });
                });
            }
            if (searchType === SEARCHTYPES.EXACT) {
                // List recipes with ONLY the entered ingredients
                return el.ingredients.every(function (item) {
                    return currentUserIngredients.some(function (cUI) {
                        return (item.ingredient === cUI.ingredient) && (item.amount === cUI.amount) && (item.quantifier === cUI.quantifier)
                    });
                });
            }
        });
    }

    return { recipes };
}

export default connect(mapStateToProps)(RecipeListContainer);