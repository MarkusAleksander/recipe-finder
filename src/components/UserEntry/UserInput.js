import React from 'react';

const UserInput = (props) => {

    return (
        <input type="number" min="0.00" step="0.01" onChange={props.handleInput} value={props.predefinedInput} />
    )

}

export default UserInput;