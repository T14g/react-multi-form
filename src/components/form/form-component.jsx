import React from 'react';
import SelectComponent from '../select/select-component';

const _SELECT_OPTIONS = {
    'imovel': [
        {
            'type': 'text',
            'label': 'nome',
            'required': true
        },
        {
            'type': 'text',
            'label': 'sobrenome',
            'required': false
        },
        {
            'type': 'email',
            'label': 'Email',
            'required': true
        }
    ],
    'vida': [
        {
            'type': 'text',
            'label': 'nome',
            'required': true
        },
        {
            'type': 'text',
            'label': 'sobrenome',
            'required': false
        },
        {
            'type': 'number',
            'label': 'Duração',
            'required': true
        }
    ],
    'celular': [
        {
            'type': 'text',
            'label': 'nome',
            'required': true
        },
        {
            'type': 'text',
            'label': 'sobrenome',
            'required': false
        },
        {
            'type': 'text',
            'label': 'Modelo do celular',
            'required': true
        }
    ]

}

class Form extends React.Component {

    constructor() {

        super();

        this.state = { selectOptions: [], selectedOption: null };
    }

    componentDidMount() {

        let options = Object.keys(_SELECT_OPTIONS);
        this.setState({ selectOptions: options });

    }

    render() {

        let selectOptions = this.state.selectOptions;

        return (
            <div>
                <SelectComponent options={selectOptions} />
            </div>
        )
    }
}
export default Form;