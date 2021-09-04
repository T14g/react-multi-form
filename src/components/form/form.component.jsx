import React from 'react';
import SelectComponent from '../select/select.component';
import InputComponent from '../input/input.component';
import SelectToggler from '../select-toggler/select-toggler.component';

import { FormContainer, Container, Row, InnerContainer } from './form.styled';

const _INPUTS = [
    {
        'id': 'sel-1',
        'type': 'text',
        'placeholder': 'Qual seguradora?',
        'required': true
    },
    {
        'id': '1',
        'type': 'text',
        'placeholder': 'Nome',
        'name': 'nome',
        'required': true
    },
    {
        'id': '2',
        'type': 'tel',
        'name': 'cel-whats',
        'placeholder': 'Celular/Whatsapp',
        'required': true
    },
    {
        'id': '3',
        'type': 'email',
        'name': 'email',
        'placeholder': 'Email',
        'required': false
    },
    {
        'id': '4',
        'type': 'text',
        'name': 'cpf-cnpj',
        'placeholder': 'CPF/CNPJ',
        'required': true
    },
    {
        'id': '5',
        'type': 'date',
        'name': 'aniversario',
        'placeholder': 'Data de nascimento',
        'required': true
    },
    {
        'id': '6',
        'type': 'text',
        'name': 'cep',
        'placeholder': 'CEP',
        'required': true
    },
    {
        'id': '7',
        'type': 'text',
        'placeholder': 'Qual seguradora?',
        'required': true
    }
];

const _SELECT_OPTIONS = {
    'Imóvel': ['sel-1', '1', '2', '3', '4', '5', '7'],
    'Residencial': ['sel-1', '1', '2', '4', '5', '7'],
    'Empresarial': ['sel-1', '1', '2', '5', '7'],
    'Condomínio': ['sel-1', '1', '2', '5', '7'],
    'Plano de saúde': ['sel-1', '1', '2', '5', '7'],
    'Plano dental': ['sel-1', '1', '2', '5', '7'],
    'Vida em grupo': ['sel-1', '1', '2', '5', '7'],
    'Vida individual': ['sel-1', '1', '2', '5', '7'],
    'Outros': ['sel-1', '1', '2', '5', '7', 'sel-1']
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
                    <Row>
                        Tipo de seguro
                        <SelectComponent
                            handleSelect={this.handleSelection}
                            options={selectOptions} />
                    </Row>
                </Container>

                <InnerContainer>
                {
                    selectionInputs.length > 0 ? (
                        selectionInputs.map((inp, index) => {
                            
                            if (inp.id === 'sel-1') {
                                return (
                                    <SelectToggler>
                                        <h2>Test</h2>
                                    </SelectToggler>
                                )
                            } else {
                                return (
                                    <InputComponent
                                        key={index}
                                        type={inp.type}
                                        name={inp.name}
                                        placeholder={inp.placeholder}
                                        required={inp.required}
                                    />
                                )
                            }

                        })
                    ) : null
                }
                </InnerContainer>
            </FormContainer>
        )
    }
}
export default Form;