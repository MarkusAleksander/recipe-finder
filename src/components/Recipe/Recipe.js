import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {

    render() {

        return (
            <div className="recipe-block">
                <h2>{this.props.recipe.title}</h2>
                <p>{this.props.recipe.instruction}</p>
            </div>
        )
    }
}

export default Recipe;