import React from 'react';

const UserSubmit = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

export default UserSubmit;