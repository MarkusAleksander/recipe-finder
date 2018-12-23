import React, { Component } from 'react';
import './IngredientsMain.css';

import IngredientInput from './IngredientInput';
import IngredientList from './IngredientList';

class IngredientsMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ingredients: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateIngredients = this.updateIngredients.bind(this);
    }

    handleSubmit(i) {
        let t = this.state.ingredients;
        t.push(i);
        this.setState({ ingredients: t });
        this.updateIngredients();
    }

    updateIngredients() {
        this.props.updateIngredients(this.state.ingredients);
    }

    render() {
        return (
            <div>
                <IngredientInput handleSubmit={this.handleSubmit}></IngredientInput>
                <IngredientList ingredients={this.state.ingredients}></IngredientList>
            </div>
        )
    }

}

export default IngredientsMain;