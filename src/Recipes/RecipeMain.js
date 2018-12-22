import React, { Component } from 'react';

import Recipe from './Recipe';

class RecipeMain extends Component {

    render() {

        const recipes = this.props.recipes.map((r) => {
            return <Recipe recipe={r}></Recipe>
        });

        return (
            <div className="recipe-main">
                {recipes}
            </div>
        )
    }

}

export default RecipeMain;