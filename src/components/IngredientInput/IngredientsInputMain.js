import React, { Component } from 'react';
import './IngredientsInputMain.css';

import IngredientInput from './IngredientInput';
import IngredientList from '../../IngredientList/IngredientList';

class IngredientsMain extends Component {

    constructor(props) {
        super(props);

        // Maintain a list of ingredients
        this.state = {
            ingredients: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateIngredients = this.updateIngredients.bind(this);
    }

    handleSubmit(i) {
        // Handle form submission
        let t = this.state.ingredients;
        t.push(i);
        this.setState({ ingredients: t });
        this.updateIngredients();
    }

    updateIngredients() {
        // Pass updated ingredients to parent
        this.props.updateIngredients(this.state.ingredients);
    }

    render() {
        return (
            <div>
                <IngredientInput handleSubmit={this.handleSubmit}></IngredientInput>
                <IngredientList ingredients={this.state.ingredients} removable={true}></IngredientList>
            </div>
        )
    }

}

export default IngredientsMain;