import React, { Component } from 'react';
import IngredientItem from './IngredientItem.js';
import './IngredientList.css';


class IngredientList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            servingSize: this.props.servingSize || 1
        }

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(e) {
        console.log(e);
    }

    render() {

        // Render each item in the ingredient list
        const ingredients = this.props.ingredients.map((ingredient, index) =>
            <IngredientItem ingredient={ingredient} key={ingredient.id || index} removable={this.props.removable} onRemove={this.handleRemove} servingSize={this.state.servingSize}></IngredientItem>
        );

        return (
            <ul className="ingredient-list">
                {ingredients}
            </ul>
        )
    }

}

export default IngredientList;