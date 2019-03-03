import React, { Component } from 'react';
import IngredientContainer from './../Ingredient/IngredientContainer';

import { store } from './../../store/store';

class UserIngredientListContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ingredients: []
        }
    }

    componentDidMount() {

    }

    render() {

        let ingredientList;

        if (this.state.ingredients.length) {
            ingredientList =
                <ul>
                    {
                        this.state.ingredients.map(function (item) {
                            return <li key={item.id}><IngredientContainer ingredient={item}></IngredientContainer></li>
                        })
                    }
                </ul>
        } else {
            ingredientList = <p>Add an ingredient</p>
        }

        return (
            <div>
                {ingredientList}
            </div>
        )
    }

}

export default UserIngredientListContainer;