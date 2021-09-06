import React from 'react';
import SelectComponent from '../select/select.component';
import InputComponent from '../input/input.component';
import SelectToggler from '../select-toggler/select-toggler.component';

import {
    FormContainer,
    Container,
    Row,
    InnerContainer,
    Label,
    Submit
} from './form.styled';

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
        'name': 'seguradora',
        'placeholder': 'Qual seguradora?',
        'required': true
    }
];

const _SELECT_OPTIONS = {
    'imovel': {
        'title': 'Imóvel',
        'rows': [
            ['1', '2', '3'], ['5', '6', '7']
        ]
    },
    'residencial': {
        'title': 'Residencial',
        'rows': [
            ['5', '6', '7']
        ]
    },
    'condominio': {
        'title': 'Condomínio',
        'rows': [
            ['1', '2', '3']
        ]
    },
    'plano-saude': {
        'title': 'Plano de saúde',
        'rows': [
            []
        ]
    },
    'plano-dental': {
        'title': 'Plano dental',
        'rows': [
            []
        ]
    },
    'vida-grupo': {
        'title': 'Vida em grupo',
        'rows': [
            []
        ]
    },
    'vida-individual': {
        'title': 'Vida individual',
        'rows': [
            []
        ]
    },
    'outros': {
        'title': 'Outros',
        'rows': [
            []
        ]
    }
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

        let optionsKeys = Object.keys(_SELECT_OPTIONS);
        let titles = [];
        let limit = 3, count = 0;

        optionsKeys.map((value) => {

            if (limit > count) {
                let title = _SELECT_OPTIONS[value].title;
                titles.push({ value: value, title: title })
                count++;
            }

        });

        this.setState({ selectOptions: titles });

    }

    // Send message to mailer
    sendMessage = (message) => {
        let mailerURL = 'http://mattosseguros.com.br/mailer.php';

        fetch(mailerURL, {
            method: "POST",
            body: JSON.stringify({ 'message': message })
        });
    }

    // Handle form submit
    handleSubmit = () => {
        let elementsInput = document.querySelectorAll('.form-body input');

        let message = 'Iai Rampon,\n\n';

        elementsInput.forEach((el) => {
            message += `
                ${el.name} : ${el.value}\n
            `
        })

        message += 'Fim da mensagem';

        this.sendMessage(message);
    }

    // Save selected option on state
    handleSelection = (e) => {
        let selected = e.target.value;
        this.setState({
            selectedOption: selected
        });
    }

    // Get input data by Id
    getInput = (id) => {
        let inputData = _INPUTS[id];
        return inputData;
    }

    // Prepare the Row with inputs and returns it
    prepareRow = (rowData) => {

        return (
            <Row>
                {
                    rowData.map((id, index) => {
                        let data = this.getInput(id);

                        return (<InputComponent
                            key={index}
                            type={data.type}
                            name={data.name}
                            placeholder={data.placeholder}
                            required={data.required}
                        />)
                    })
                }
            </Row>
        )
    }

    // Render Selected Option Input Rows
    renderOptionRows = (option) => {

        let optionData = _SELECT_OPTIONS[option];
        let rows = optionData.rows;

        return (
            <React.Fragment>
                {
                    rows.map((row) =>
                        this.prepareRow(row)
                    )
                }
                <Submit
                    onClick={this.handleSubmit}
                >Submit</Submit>
            </React.Fragment>
        )
    }

    render() {

        let selectOptions = this.state.selectOptions;
        let selected = this.state.selectedOption;

        return (
            <FormContainer>

                <Container>
                    <Row >
                        <Label>Selecione o tipo de seguro</Label>
                        <SelectComponent
                            handleSelect={this.handleSelection}
                            options={selectOptions} />
                    </Row>
                </Container>

                <InnerContainer className="form-body">
                    {selected ? this.renderOptionRows(selected) : null}
                </InnerContainer>

            </FormContainer>
        )
    }
}
export default Form;