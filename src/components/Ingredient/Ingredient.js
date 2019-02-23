import React, { Component } from 'react';

class Ingredient extends Component {

    render() {
        return (
            <li className="ingredient">{this.props.ingredient}</li>
        )
    }

}

export default Ingredient;