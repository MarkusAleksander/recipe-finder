import React from 'react';

const UserSubmit = (props) => {
    return (
        <button className="button is-primary" onClick={props.handleClick}>{props.text}</button>
    )
}

export default UserSubmit;