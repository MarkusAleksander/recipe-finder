import React, { Component } from 'react';
import './IngredientItem.css';

class IngredientItem extends Component {

    render() {
        // Render each ingredient item
        return (
            <li className="ingredient-item">{this.props.ingredient.amount} {this.props.ingredient.ingredient}</li>
        )
    }

}

export default IngredientItem;