import React from 'react';
import Option from '../option/option-component';

const SelectComponent = ({ options }) => {
    console.log(options);

    return (
        <select>
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