import React, { Component } from 'react';

class SearchModes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mode: null
        }

        this.updateMode = this.updateMode.bind(this);
    }

    updateMode(m) {
        this.setState({ mode: m });
        this.props.updateMode(m);
    }

    componentDidMount() {
        this.setState({ mode: 'all' });
    }

    render() {

        const modeItems = this.props.modes.map((m) => {
            return <li className={this.state.mode === m.mode ? 'active' : ''} ><button onClick={() => { this.updateMode(m.mode) }}>{m.mode}</button></li>
        })

        return (
            <ul>
                {modeItems}
            </ul>
        )
    }
}

export default SearchModes;