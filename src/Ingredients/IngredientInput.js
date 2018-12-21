import React, { Component } from 'react';

class IngredientInput extends Component {

    constructor(props) {
        super(props);
        this.state = { item: '' };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state.item);
        this.setState({ item: '' });
    }

    handleChange(e) {
        this.setState({ item: e.target.value });
    }

    render() {
        return (
            <form className="ingredient-input" onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.item} />
                <button>Add</button>
            </form >
        )
    }
}

export default IngredientInput;