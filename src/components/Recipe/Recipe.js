import React, { Component } from 'react';
import IngredientListContainer from './../Ingredient/IngredientListContainer';

//import { store } from '../../store/store';

class Recipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <div className="box content">
                <h2 className="title">{this.props.recipe.title}</h2>
                <IngredientListContainer recipeID={this.props.recipe.id}></IngredientListContainer>
                <p>{this.props.recipe.instruction}</p>
            </div>
        )
    }
}

export default Recipe;