import React, { Component } from 'react';

import UserSubmit from './UserSubmit';

class UserSubmitContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
            text: this.props.text
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick();
    }

    render() {
        return (
            <div>
                <UserSubmit text={this.state.text} handleClick={this.handleClick}></UserSubmit>
            </div>

        )
    }

}

export default UserSubmitContainer;