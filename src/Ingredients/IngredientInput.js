import React, { Component } from 'react';
import './IngredientInput.css';

class IngredientInput extends Component {

    constructor(props) {
        super(props);
        this.state = { item: '' };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        // Handle form submission
        e.preventDefault();
        if (this.state.item !== '') {
            // If there is something to submit, pass to callback
            this.props.handleSubmit(this.state.item);
            // Clear the current item
            this.setState({ item: '' });
        }
    }

    handleChange(e) {
        // Update current state to user input
        this.setState({ item: e.target.value });
    }

    render() {
        return (
            <form className="ingredient-input" onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.item} />
                <button onClick={this.handleSubmit}>Add</button>
            </form >
        )
    }
}

export default IngredientInput;