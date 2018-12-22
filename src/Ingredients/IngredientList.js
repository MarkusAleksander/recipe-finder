import React, { Component } from 'react';
import IngredientItem from './IngredientItem.js';
import './IngredientList.css';


class IngredientList extends Component {

    render() {

        const ingredients = this.props.ingredients.map((ingredient, index) =>
            <IngredientItem item={ingredient} key={index}></IngredientItem>
        );

        return (
            <ul className="ingredient-list">
                {ingredients}
            </ul>
        )
    }

}

export default IngredientList;