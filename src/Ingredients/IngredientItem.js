import React, { Component } from 'react';
import './IngredientItem.css';

class IngredientItem extends Component {

    render() {
        // Render each ingredient item
        return (
            <li className="ingredient-item">{this.props.item}</li>
        )
    }

}

export default IngredientItem;