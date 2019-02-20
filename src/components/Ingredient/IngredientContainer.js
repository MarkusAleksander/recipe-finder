import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientContainer extends Component {

    const mapStateToProps = state => {
        return {
            reducers: state.reducers
        }
    }

    render() {
        return (
            <Ingredient></Ingredient>
        )
    }

}

export default IngredientContainer;