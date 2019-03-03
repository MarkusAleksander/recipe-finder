import React, { Component } from 'react';
import Ingredient from './Ingredient';
import { store } from '../../store/store';

// * Container for Ingredient Stateless Component
// * Ingredients are stored by ID so get name
// * on mounting

class IngredientContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredientData: this.props.ingredient,
            ingredientName: ''
        }
    }

    componentDidMount() {
        this.setState({
            ingredientName: getIngredientDetail(this.state.ingredientData.ingredient_id)
        })
    }

    render() {
        return (
            <Ingredient
                amount={this.state.ingredientData.amount}
                quantifier={this.state.ingredientData.quantifier}
                ingredientName={this.state.ingredientName}></Ingredient>
        )
    }
}

function getIngredientDetail(id) {
    var detail = store.getState().recipeIngredients.find(function (x) { return x.id === Number(id) });
    // debugger;
    return detail !== undefined ? detail.title : 'Err';
}

export default IngredientContainer;