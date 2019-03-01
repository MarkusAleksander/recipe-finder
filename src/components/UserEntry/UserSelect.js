import React from 'react';

const UserSelect = (props) => {

    const IngredientOptions = props.ingredients.map((i) =>
        <option>{i.ingredient}</option>
    );

    return (
        <select>
            <option selected>Select an ingredient</option>
            {IngredientOptions}
        </select>
    )
}

export default UserSelect;