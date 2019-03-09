import React from 'react';

const UserSelect = (props) => {

    const Options = props.items.map((i) =>
        <option key={i.id} value={i.id}>{i.title}</option>
    );

    return (
        <select onChange={props.handleSelection} value={props.selectionKey}>
            <option key="0" value='0'>Select an item</option>
            {Options}
        </select>
    )
}

export default UserSelect;