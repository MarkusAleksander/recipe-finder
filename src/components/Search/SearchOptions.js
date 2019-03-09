import React, { Component } from 'react';
import './SearchOptions.css';

class SearchOptions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mode: null
        }

        this.updateOption = this.updateOption.bind(this);
    }

    updateOption(m) {
        // Update selected mode
        this.setState({ mode: m }, () => { this.props.onUpdate(this.state.mode) });
    }

    componentDidMount() {
        // Set initial state to mode 'all'
        this.updateOption(this.props.options[0].mode);
    }

    render() {
        // Render each mode and highlight active for currently chosen one
        const modeItems = this.props.options.map((m) => {
            return <li key={m.mode} className={this.state.mode === m.mode ? 'active' : ''} ><button onClick={() => { this.updateOption(m.mode) }}>{m.mode}</button></li>
        })

        return (
            <ul>
                {modeItems}
            </ul>
        )
    }
}

export default SearchOptions;