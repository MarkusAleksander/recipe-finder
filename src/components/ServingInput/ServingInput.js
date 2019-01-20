import React, { Component } from 'react';
import './ServingInput.css';

class ServingInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            servingSize: this.props.servingSize
        }

        this.handleServingsChange = this.handleServingsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        if (this.state.servingSize !== 0 && this.state.servingSize >= 1) {
            this.props.updateServings(Number(this.state.servingSize));
        }
    }

    handleServingsChange(e) {
        this.setState({ servingSize: e.target.value });
    }

    render() {

        return (
            <form className="serving-input" onSubmit={this.handleSubmit}>
                <input
                    className="serving-input__total"
                    type="number"
                    onChange={this.handleServingsChange}
                    value={this.state.servingSize}
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