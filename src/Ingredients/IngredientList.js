import React, { Component } from 'react';
import IngredientItem from './IngredientItem.js';
import './IngredientList.css';


class IngredientList extends Component {

    render() {

        const ingredientItems = this.props.items.map((item, index) =>
            <IngredientItem item={item} key={index}></IngredientItem>
        );

        return (
            <ul className="ingredient-list">
                {ingredientItems}
            </ul>
        )
    }

}

export default IngredientList;