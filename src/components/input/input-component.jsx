import React from 'react';

const InputComponent = ({ type, name, placeholder, required }) => {

    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required} />
    );
}

export default InputComponent;