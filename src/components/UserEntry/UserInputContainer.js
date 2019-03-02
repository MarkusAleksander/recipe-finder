import React, { Component } from 'react';
import UserInput from './UserInput';

class UserInputContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            type: this.props.type,
            userInput: ''
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.props.handleInput(e.target.value);
    }

    render() {
        return (
            <div>
                <UserInput handleInput={this.handleInput}></UserInput>
            </div>
        )
    }

}

export default UserInputContainer