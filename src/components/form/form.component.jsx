import React from 'react';
import SelectComponent from '../select/select.component';
import InputComponent from '../input/input.component';

import { FormContainer, Container } from './form.styled';

const _INPUTS = [
    {
        'id': '1',
        'type': 'text',
        'label': 'Nome',
        'required': true
    },
    {
        'id': '2',
        'type': 'text',
        'label': 'Sobrenome',
        'required': false
    },
    {
        'id': '3',
        'type': 'email',
        'label': 'Email',
        'required': true
    },
    {
        'id': '4',
        'type': 'number',
        'label': 'Duração',
        'required': true
    },
    {
        'id': '5',
        'type': 'text',
        'label': 'Modelo do celular',
        'required': true
    },
    {
        'id': '6',
        'type': 'text',
        'label': 'Endereço',
        'required': true
    },
    {
        'id': '7',
        'type': 'text',
        'label': 'Info adicional',
        'required': true
    }
];

const _SELECT_OPTIONS = {
    'imovel': ['1', '2', '3','4','5','7'],
    'vida': ['1', '2', '4','5','7'],
    'celular': ['1', '2', '5','7']
};

class Form extends React.Component {

    constructor() {

        super();

        this.state = {
            selectOptions: [],
            selectedOption: null,
            selectedInputs: [],
            inputsToShow: []
        };
    }

    componentDidMount() {

        let options = Object.keys(_SELECT_OPTIONS);
        this.setState({ selectOptions: options });

    }

    getInputs(key) {
        let ids = _SELECT_OPTIONS[key];
        let selected = [];

        _INPUTS.forEach((inp) => {

            ids.forEach((id) => {
                if (inp.id === id) {
                    selected.push(inp);
                }
            })

        })

        return selected;
    }

    handleSelection = (e) => {
        let selected = e.target.value;
        let inputs = this.getInputs(selected);

        this.setState({
            selectedOption: selected,
            selectedInputs: inputs
        });
    }

    render() {

        let selectOptions = this.state.selectOptions;
        let selectionInputs = this.state.selectedInputs;

        return (
            <FormContainer>

                <Container>
                    Selectione um tipo de seguro
                    <SelectComponent
                        handleSelect={this.handleSelection}
                        options={selectOptions} />
                </Container>

                {
                    selectionInputs.length > 0 ? (
                        selectionInputs.map((inp, index) => (
                            <InputComponent
                                key={index}
                                type={inp.type}
                                name={inp.label}
                                placeholder={inp.label}
                                required={inp.required}
                            />
                        ))
                    ) : null
                }
            </FormContainer>
        )
    }
}
export default Form;