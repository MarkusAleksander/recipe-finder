import React, { Component } from 'react';
import IngredientItem from './IngredientItem.js';
import './IngredientList.css';


class IngredientList extends Component {

    constructor(props) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(e) {
        console.log(e);
    }

    render() {

        // Render each item in the ingredient list
        const ingredients = this.props.ingredients.map((ingredient, index) =>
            <IngredientItem ingredient={ingredient} key={index} removable={this.props.removable} onRemove={this.handleRemove}></IngredientItem>
        );

        return (
            <ul className="ingredient-list">
                {ingredients}
            </ul>
        )
    }

}

export default IngredientList;