import React, { Component } from 'react';
import './ServingInput.css';

class ServingInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            servings: this.props.servings
        }

        this.handleServingsChange = this.handleServingsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        if (this.state.servings !== 0 && this.state.servings >= 1) {
            this.props.updateServings(Number(this.state.servings));
        }
    }

    handleServingsChange(e) {
        this.setState({ servings: e.target.value });
    }

    render() {

        return (
            <form className="serving-input" onSubmit={this.handleSubmit}>
                <input
                    className="serving-input__total"
                    type="number"
                    onChange={this.handleServingsChange}
                    value={this.state.servings}
                    min="0"
                    max="50" />
                <button
                    className="serving-input__submit"
                    onClick={this.handleSubmit}>Update</button>
            </form>
        )

    }
}

export default ServingInput;