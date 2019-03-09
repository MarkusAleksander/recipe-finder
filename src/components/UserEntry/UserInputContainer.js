import React, { Component } from 'react';
import UserInput from './UserInput';

import { connect } from 'react-redux';
import { EDITINGSTATES } from './../../store/userEditingStates';

class UserInputContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            predefinedInput: this.props.predefinedInput
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.props.handleInput(e.target.value);
    }

    render() {
        return (
            <div>
                <UserInput predefinedInput={this.props.predefinedInput} handleInput={this.handleInput}></UserInput>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const value = state.currentUserIngredient[ownProps.type] || 0;
    return { predefinedInput: value };
}

export default connect(mapStateToProps)(UserInputContainer);