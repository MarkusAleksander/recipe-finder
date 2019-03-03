import React, { Component } from 'react';
import UserSelect from './UserSelect';
import { connect } from 'react-redux';

import { store } from '../../store/store';

class UserSelectContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            type: this.props.type,
            action: this.props.handleSelection,
            items: []
        }

        this.handleSelection = this.handleSelection.bind(this);
    }

    componentDidMount() {
        this.setState({
            items: getItems(this.state.type)
        });
    }

    handleSelection(e) {
        dispatchToStore(e.target.value, this.state.action);
    }

    render() {

        return (
            <div>
                {this.state.items.length ? <UserSelect handleSelection={this.handleSelection} items={this.state.items}></UserSelect> : <p>No Ingredients To Select</p>}
            </div>
        )

    }
}

function getItems(type) {
    return store.getState()[type];
}

function dispatchToStore(v, action) {
    store.dispatch(action(v));
}

export default UserSelectContainer;