import React from 'react';
import Option from '../option/option.component';

const SelectComponent = ({ options, handleSelect }) => {
    console.log(options);

    return (
        <select onChange={handleSelect}>
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