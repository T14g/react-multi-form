import { TextareaStyled } from './textarea.styles';

const TextArea = ({ placeholder = null, required = false, customClass, name }) => {

    return (
        <TextareaStyled
            placeholder={placeholder}
            name={name}
            required={required}
            className={customClass} />
    );
}

export default TextArea;