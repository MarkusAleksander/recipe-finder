import React, { Component } from 'react';
import UserSelect from './UserSelect';
import { connect } from 'react-redux';
import { EDITINGSTATES } from './../../store/userEditingStates';

import { store } from '../../store/store';

class UserSelectContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            type: this.props.type,
            action: this.props.handleSelection,
            items: [],
            selection_key: this.props.selection
        }

        this.handleSelection = this.handleSelection.bind(this);
    }

    componentDidMount() {
        this.setState({
            items: getItems(this.state.type)
        });
    }

    handleSelection(e) {
        this.setState({ selection_key: e.target.value });
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

const mapStateToProps = (state, ownProps) => {
    const selection = state.currentUserIngredient[ownProps.type] || 0;
    return { selection: selection };
}

export default connect(mapStateToProps)(UserSelectContainer);