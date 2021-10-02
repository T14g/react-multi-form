import React from 'react';
import { TextareaStyled } from './textarea.styles';

const TextArea = ({ placeholder = null, required = false }) => {

    return (
        <TextareaStyled placeholder={placeholder} required={required} />
    );
}

export default TextArea;