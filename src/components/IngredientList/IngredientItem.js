import React, { Component } from 'react';
import './IngredientItem.css';

class IngredientItem extends Component {

    render() {

        // Only render remove icon if item should be removable
        const removable = this.props.removable ? <span className="ingredient-item__remove" onClick={this.props.onRemove()}>-</span> : null;

        // Render an  ingredient item
        return (
            <li className="ingredient-item">{this.props.ingredient.amount * this.props.servingSize}{this.props.ingredient.quantifier} {this.props.ingredient.ingredient} {removable}</li>
        )
    }

}

export default IngredientItem;