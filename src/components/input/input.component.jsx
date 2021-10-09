import { InputStyled } from './input.styles';

const InputComponent = ({ type, name, placeholder, required, customClass, handleChange, value }) => {

    return (
        <InputStyled
            onChange={handleChange}
            value={value}
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            className={customClass}
        />
    );
}

export default InputComponent;