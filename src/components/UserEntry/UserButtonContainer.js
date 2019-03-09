import React, { Component } from 'react';
import UserButton from './UserButton';

import { connect } from 'react-redux';
import { store } from './../../store/store';

class UserButtonContainer extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        dispatchToStore(this.props.type, this.props.action);
    }

    render() {
        return (
            <UserButton handleClick={this.handleClick} buttonText={this.props.buttonText}></UserButton>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
}

function dispatchToStore(v, action) {
    store.dispatch(action(v));
}

export default connect(mapStateToProps)(UserButtonContainer);