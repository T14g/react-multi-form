import Option from '../option/option.component';

const SelectComponent = ({
    options,
    handleSelect,
    customClass,
    name,
    placeholder
}) => {

    return (

        <select
            placeholder={placeholder}
            onChange={handleSelect}
            className={customClass}
            name={name}>
            <option disabled>Selecione</option>
            {
                options.length > 0 ? (
                    options.map((opt, index) => (
                        <Option key={index} name={opt.title} value={opt.value} />
                    ))
                ) : null
            }
        </select>
    );

}

export default SelectComponent;