import React from 'react';
import { TextareaStyled } from './textarea.styles';

const TextArea = ({ placeholder = null, required = false, customClass }) => {

    return (
        <TextareaStyled
            placeholder={placeholder}
            required={required}
            className={customClass} />
    );
}

export default TextArea;