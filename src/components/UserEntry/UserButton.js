import React from 'react';

const UserButton = (props) => {

    return (
        <button className="button" onClick={props.handleClick}>{props.buttonText}</button>
    )
}

export default UserButton;