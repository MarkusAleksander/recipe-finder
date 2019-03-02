import React, { Component } from 'react';
import UserSelect from './UserSelect';

import { store } from '../../store/store';

class UserSelectContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            type: this.props.type,
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
        this.props.handleSelection(e.target.value);
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

export default UserSelectContainer;