import React from 'react';
import Option from '../option/option.component';

const SelectComponent = ({ options, handleSelect }) => {

    return (
        <select onChange={handleSelect}>
            <option disabled>Selecione</option>
            {
                options.length > 0 ? (
                    options.map((name, index) => (
                        <Option key={index} name={name} />
                    ))
                ) : null
            }
        </select>
    );
    
}

export default SelectComponent;