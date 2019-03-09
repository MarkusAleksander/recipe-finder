import React, { Component } from 'react';
import IngredientContainer from './../Ingredient/IngredientContainer';

import { connect } from 'react-redux';

class UserIngredientListContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userIngredients: this.props.userIngredientsList
        }
    }

    render() {

        let ingredientList;

        if (this.props.userIngredientsList.length) {
            ingredientList =
                <ul>
                    {
                        this.props.userIngredientsList.map(function (item) {
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

const mapStateToProps = state => {
    const userIngredientsList = state.userIngredients || [];
    return { userIngredientsList };
}

export default connect(mapStateToProps)(UserIngredientListContainer);