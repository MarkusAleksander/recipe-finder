import React, { Component } from 'react';
import IngredientItem from './IngredientItem.js';
import './IngredientList.css';


class IngredientList extends Component {

    render() {

        // Render each item in the ingredient list
        const ingredients = this.props.ingredients.map((ingredient, index) =>
            <IngredientItem ingredient={ingredient} key={index}></IngredientItem>
        );

        return (
            <ul className="ingredient-list">
                {ingredients}
            </ul>
        )
    }

}

export default IngredientList;