import React from 'react';
import { TextareaStyled } from './textarea.styles';

const TextArea = ({ placeholder = null }) => {

    return (
        <TextareaStyled placeholder={placeholder} />
    );
}

export default TextArea;