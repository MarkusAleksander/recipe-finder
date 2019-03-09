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
            ingredientTitle: ''
        }
    }

    componentDidMount() {
        this.setState({
            ingredientTitle: getIngredientDetail(this.state.ingredientData.ingredient)
        })
    }

    render() {
        return (
            <Ingredient
                amount={this.state.ingredientData.amount}
                quantifier={this.state.ingredientData.quantifier}
                ingredientTitle={this.state.ingredientTitle}></Ingredient>
        )
    }
}

function getIngredientDetail(id) {
    var detail = store.getState().ingredients.find(function (x) { return x.id === Number(id) });
    return detail !== undefined ? detail.title : 'Err';
}

export default IngredientContainer;