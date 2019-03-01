import React from 'react';

const UserSelect = (props) => {

    const IngredientOptions = props.ingredients.map((i) =>
        <option key={i.id} value={i.id}>{i.ingredient}</option>
    );

    return (
        <select onChange={props.handleSelection}>
            <option selected>Select an ingredient</option>
            {IngredientOptions}
        </select>
    )
}

export default UserSelect;