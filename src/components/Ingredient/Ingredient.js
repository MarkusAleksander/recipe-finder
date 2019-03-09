import React from 'react';

// * Display Ingredient Info - Amount, Quantifier, Ingredient

const Ingredient = (props) => (
    <p>{props.amount}{props.quantifier} {props.ingredientTitle}</p>
)

export default Ingredient;