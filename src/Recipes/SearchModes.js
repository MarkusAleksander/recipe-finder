import React, { Component } from 'react';
import './SearchModes.css';

class SearchModes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mode: null
        }

        this.updateMode = this.updateMode.bind(this);
    }

    updateMode(m) {
        // Update selected mode
        this.setState({ mode: m });
        this.props.updateMode(m);
    }

    componentDidMount() {
        // Set initial state to mode 'all'
        let m = this.props.modes[0].mode;
        this.setState({ mode: m });
        this.props.updateMode(m);
    }

    render() {

        // Render each mode and highlight active for currently chosen one
        const modeItems = this.props.modes.map((m) => {
            return <li className={this.state.mode === m.mode ? 'active' : ''} ><button onClick={() => { this.updateMode(m.mode) }}>{m.mode}</button></li>
        })

        return (
            <ul className="modes">
                {modeItems}
            </ul>
        )
    }
}

export default SearchModes;