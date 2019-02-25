import React from 'react';

const Ingredient = (props) => (
    <div className="ingredient">{props.amount}{props.quantifier} {props.ingredientName}</div>
)

export default Ingredient;