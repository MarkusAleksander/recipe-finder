import React from 'react';

const UserSelect = (props) => {

    const Options = props.items.map((i) =>
        <option key={i.id} value={i.id}>{i.title}</option>
    );

    return (
        <select onChange={props.handleSelection} defaultValue={'0'}>
            <option key="0" value=''>Select an item</option>
            {Options}
        </select>
    )
}

export default UserSelect;