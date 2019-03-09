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
            items: [],
            selectionKey: this.props.selection
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
            <div className="select is-primary">
                {this.state.items.length ? <UserSelect selectionKey={this.props.selection} handleSelection={this.handleSelection} items={this.state.items}></UserSelect> : <p>No Ingredients To Select</p>}
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
    const selection = state.currentUserIngredient[ownProps.type.slice(0, -1)] || 0;
    // debugger;
    return { selection: selection };
}

export default connect(mapStateToProps)(UserSelectContainer);