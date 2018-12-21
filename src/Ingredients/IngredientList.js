import React, { Component } from 'react';
import IngredientItem from './IngredientItem.js';
import './IngredientList.css';


class IngredientList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: ["Tomatoes", "Pasta", "Oregano"],
        }
    }

    render() {

        const ingredientItems = this.state.items.map((item) =>
            <IngredientItem item={item} ></IngredientItem>
        );

        return (
            <ul className="ingredient-list">
                {ingredientItems}
            </ul>
        )
    }

}

export default IngredientList;