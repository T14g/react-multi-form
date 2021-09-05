import React from 'react';

const Option = ({ name, value }) => {

    return (
        <option value={value}>{name}</option>
    );
}

export default Option;