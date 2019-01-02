import React, { Component } from 'react';

import Recipe from './Recipe';

class RecipeMain extends Component {

    render() {

        const recipes = this.props.recipes.map((r) => {

            let m = this.props.modes.find(el => { return el.mode === this.props.search_mode }) || this.props.modes[0];
            let l = m.fn(r, this.props.ingredients, function () {
                return <Recipe recipe={r}></Recipe>;
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