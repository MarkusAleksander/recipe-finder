import React, { Component } from 'react';
import UserSelect from './UserSelect';

import { store } from '../../store/store';

class UserSelectContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ingredients: []
        }
    }

    componentDidMount() {
        this.setState({
            ingredients: getIngredients()
        });
    }

    render() {

        // const selectBox = <UserSelect ingredients={this.state.ingredients}></UserSelect>;
        // const ingredients = this.state.ingredients;

        return (
            <div>
                {this.state.ingredients.length ? <UserSelect ingredients={this.state.ingredients}></UserSelect> : <p>No Ingredients To Select</p>}
            </div>
        )

    }
}

function getIngredients() {
    return store.getState().recipeIngredients;
}

export default UserSelectContainer;