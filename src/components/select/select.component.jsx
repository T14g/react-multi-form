import Option from '../option/option.component';

const SelectComponent = ({ options, handleSelect, customClass, required = false }) => {

    return (
        <select onChange={handleSelect} className={customClass} required={false}>
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