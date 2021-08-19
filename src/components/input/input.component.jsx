import React from 'react';
import { InputStyled } from './input.styles';

const InputComponent = ({ type, name, placeholder, required }) => {

    return (
        <InputStyled
            type={type}
            name={name}
            placeholder={placeholder}
            required={required} />
    );
}

export default InputComponent;