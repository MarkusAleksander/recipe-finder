import React, { Component } from 'react';
import './IngredientInput.css';

import quantifiers from './../localData/quantifiers.js';

class IngredientInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: '',
            amount: 0.25,
            quantifier: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleIngredientChange = this.handleIngredientChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleQuantifierChange = this.handleQuantifierChange.bind(this);
        this.resetValues = this.resetValues.bind(this);
    }

    resetValues() {
        // Clear the current item
        this.setState({
            item: '',
            amount: 0.25,
            quantifier: ''
        });
    }

    handleSubmit(e) {
        // Handle form submission
        e.preventDefault();
        if (this.state.item !== '' && this.state.quantifier !== null) {
            // If there is something to submit, pass to callback
            this.props.handleSubmit(
                {
                    'ingredient': this.state.item,
                    'amount': `${this.state.amount}${this.state.quantifier}`
                }
            );
            this.resetValues();
        }
    }

    // Update with Ingredient
    handleIngredientChange(e) {
        this.setState({ item: e.target.value });
    }

    // Update the Amount
    handleAmountChange(e) {
        this.setState({ amount: e.target.value });
    }

    // Update the Quantifier
    handleQuantifierChange(e) {
        this.setState({ quantifier: e.target.value });
    }

    render() {

        const quantifierOptions = quantifiers.map((el) => {
            return <option value={el.value}>{el.content}</option>
        });

        return (
            <form className="ingredient-input" onSubmit={this.handleSubmit}>
                <input
                    className="ingredient-input__item"
                    type="text"
                    onChange={this.handleIngredientChange}
                    value={this.state.item} />
                <input
                    className="ingredient-input__amount"
                    type="number"
                    step="0.25"
                    min="0.25"
                    max="1000"
                    onChange={this.handleAmountChange}
                    value={this.state.amount} />
                <select
                    className="ingredient-input__quantifier"
                    onChange={this.handleQuantifierChange}
                    value={this.state.quantifier} >
                    <option value="" disabled>Select quantifier</option>
                    {quantifierOptions}
                </select>
                <button
                    className="ingredient-input__submit"
                    onClick={this.handleSubmit}>Add</button>
            </form >
        )
    }
}

export default IngredientInput;