import React from 'react';

const UserInput = (props) => {

    return (
        <input type="number" min="0.01" step="0.01" onChange={props.handleInput} />
    )

}

export default UserInput;