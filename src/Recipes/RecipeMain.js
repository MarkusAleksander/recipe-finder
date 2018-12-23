import React, { Component } from 'react';

import Recipe from './Recipe';

class RecipeMain extends Component {

    render() {

        // How to render the recipes depending on the mode chosen
        const recipes = this.props.recipes.map((r) => {

            if (this.props.search_mode === 'all') {
                // Display all recipes
                return <Recipe recipe={r}></Recipe>
            } else if (this.props.search_mode === 'exact') {
                // Display all recipes that contain all the ingredients entered
                if ((() => {
                    return r.ingredients.every((l) => {
                        return this.props.ingredients.indexOf(l) >= 0;
                    });
                })()) {
                    return <Recipe recipe={r}></Recipe>
                };
            } else if (this.props.search_mode === 'fuzzy') {
                // Display all recipes that contain some of the ingredients entered
                if ((() => {
                    return this.props.ingredients.some(function (v) {
                        return r.ingredients.indexOf(v) >= 0;
                    });
                })()) {
                    return <Recipe recipe={r}></Recipe>
                }
            } else {
                // Default mode is All
                return <Recipe recipe={r}></Recipe>
            }
        });

        return (
            <div className="recipe-main">
                {recipes}
            </div>
        )
    }

}

export default RecipeMain;