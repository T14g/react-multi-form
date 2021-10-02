import React from 'react';
import { InputStyled } from './input.styles';

const InputComponent = ({ type, name, placeholder, required, customClass }) => {

    return (
        <InputStyled
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            className={customClass}
        />
    );
}

export default InputComponent;