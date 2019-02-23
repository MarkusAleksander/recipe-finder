import React, { Component } from 'react';
import RecipeContainer from './RecipeContainer';

import { store } from '../../store/store';

class RecipeListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        this.setState({
            recipes: getRecipes()
        });
    }

    render() {
        return (
            <ul>
                {this.state.recipes.map(function (item) {
                    return <li><RecipeContainer id={item.id}></RecipeContainer></li>
                })}
            </ul>
        )
    }
}

function getRecipes() {
    return store.getState().recipes;
}

export default RecipeListContainer;