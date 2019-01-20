import React, { Component } from 'react';
import './Recipe.css';

import '../IngredientList/IngredientList';
import IngredientList from '../IngredientList/IngredientList';

class Recipe extends Component {


    render() {

        return (
            <div className="recipe-block">
                <h2>{this.props.recipe.title}</h2>
                <IngredientList ingredients={this.props.recipe.ingredients} removeable={false} servingSize={this.props.servingSize}></IngredientList>
                <p>{this.props.recipe.instruction}</p>
            </div>
        )
    }

}

export default Recipe;