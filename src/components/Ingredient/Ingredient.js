import React from 'react';

// * Display Ingredient Info - Amount, Quantifier, Ingredient

const Ingredient = (props) => (
    <p className="ingredient">{props.amount}{props.quantifier} {props.ingredientTitle}</p>
)

export default Ingredient;