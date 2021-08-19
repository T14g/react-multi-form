import React from 'react';

const Option = ({ name }) => {

    return (
        <option value={name}>{name}</option>
    );
}

export default Option;