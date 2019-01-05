import React, { Component } from 'react';

import Recipe from './Recipe';

import recipeList from './recipe_list';

class RecipeMain extends Component {

    render() {
        const recipes = recipeList.map((r, index) => {

            let m = this.props.searchModes.find(el => { return el.mode === this.props.searchMode }) || this.props.searchModes[0];
            let l = m.fn(r, this.props.ingredients, function () {
                return <Recipe key={index} recipe={r}></Recipe>;
            });
            return l;

        });

        return (
            <div className="recipe-main">
                {recipes}
            </div>
        )
    }

}

export default RecipeMain;