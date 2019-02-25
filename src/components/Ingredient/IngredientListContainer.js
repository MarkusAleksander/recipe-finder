import React, { Component } from 'react';
import IngredientContainer from './IngredientContainer';

import { store } from '../../store/store';

class IngredientListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            recipe_id: this.props.recipeID
        }
    }

    componentDidMount() {
        this.setState({
            ingredients: getRecipeIngredients(this.state.recipe_id)
        });
    }

    render() {
        return (
            <ul>
                {this.state.ingredients.map(function (item) {
                    return <li><IngredientContainer ingredient={item}></IngredientContainer></li>
                })}
            </ul>
        )
    }
}

function getRecipeIngredients(id) {
    return store.getState().recipes.find(function (x) { return x.id === id }).ingredients;
}

export default IngredientListContainer;