import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {


    render() {

        // Render each ingredient item in the recipe
        const listIngredients = this.props.recipe.ingredients.map((i) => {
            return <li>{i}</li>
        });

        return (
            <div className="recipe-block">
                <h2>{this.props.recipe.title}</h2>
                <ul>{listIngredients}</ul>
                <p>{this.props.recipe.instruction}</p>
            </div>
        )
    }

}

export default Recipe;