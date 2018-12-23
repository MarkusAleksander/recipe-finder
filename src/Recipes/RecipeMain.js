import React, { Component } from 'react';

import Recipe from './Recipe';

class RecipeMain extends Component {

    render() {

        const recipes = this.props.recipes.map((r) => {
            if (this.props.search_mode === 'all') {
                return <Recipe recipe={r}></Recipe>
            } else if (this.props.search_mode === 'exact') {
                if ((() => {
                    return r.ingredients.every((l) => {
                        return this.props.ingredients.indexOf(l) >= 0;
                    });
                })()) {
                    return <Recipe recipe={r}></Recipe>
                };
            } else if (this.props.search_mode === 'fuzzy') {
                if ((() => {
                    return this.props.ingredients.some(function (v) {
                        return r.ingredients.indexOf(v) >= 0;
                    });
                })()) {
                    return <Recipe recipe={r}></Recipe>
                }
            } else {
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