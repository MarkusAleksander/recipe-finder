import React, { Component } from 'react';
import './IngredientInput.css';

class IngredientInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: '',
            amount: '',
            quantifier: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleIngredientChange = this.handleIngredientChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleQuantifierChange = this.handleQuantifierChange.bind(this);
    }

    handleSubmit(e) {
        // Handle form submission
        e.preventDefault();
        if (this.state.item !== '' && this.state.amount !== '' && this.state.quantifier !== null) {
            // If there is something to submit, pass to callback
            this.props.handleSubmit(
                {
                    'ingredient': this.state.item,
                    'amount': `${this.state.amount}${this.state.quantifier}`
                }
            );
            // Clear the current item
            this.setState({
                item: '',
                amount: '',
                quantifier: null
            });
        }
    }

    handleIngredientChange(e) {
        // Update current state to user input
        this.setState({ item: e.target.value });
    }

    handleAmountChange(e) {
        this.setState({ amount: e.target.value });
    }

    handleQuantifierChange(e) {
        this.setState({ quantifier: e.target.value });
    }

    render() {
        return (
            <form className="ingredient-input" onSubmit={this.handleSubmit}>
                <input onChange={this.handleIngredientChange} value={this.state.item} />
                <input onChange={this.handleAmountChange} value={this.state.amount} />
                <select onChange={this.handleQuantifierChange} value={this.state.quantifier}>
                    <option value="" selected disabled>Select quantifier</option>
                    <option value="g">grams</option>
                    <option value="tpsn">tpsn</option>
                </select>
                <button onClick={this.handleSubmit}>Add</button>
            </form >
        )
    }
}

export default IngredientInput;