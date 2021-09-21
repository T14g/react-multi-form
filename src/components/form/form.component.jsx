import React from 'react';
import SelectComponent from '../select/select.component';
import InputComponent from '../input/input.component';
import SelectToggler from '../select-toggler/select-toggler.component';
import TextArea from '../textarea/textarea.component';

import { _INPUTS, _SELECT_OPTIONS } from './data';

import {
    FormContainer,
    Container,
    Row,
    Column,
    InnerContainer,
    Label,
    Submit
} from './form.styled';
class Form extends React.Component {

    constructor() {

        super();

        this.state = {
            selectOptions: [],
            selectedOption: 'automovel',
            selectedInputs: [],
            inputsToShow: []
        };
    }

    componentDidMount() {

        let optionsKeys = Object.keys(_SELECT_OPTIONS);
        let titles = [];

        optionsKeys.map((value) => {

            let title = _SELECT_OPTIONS[value].title;
            titles.push({ value: value, title: title })

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

    // Verify if is one of the select inputs
    isSelect = (id) => {

        switch (id) {
            case 'renew':
                return (
                    <SelectToggler />
                )
        }

    }

    // Get input data by Id
    getInput = (id) => {
        let inputData = {};

        _INPUTS.forEach((inp) => {
            if (inp.id === id && inp.id) {
                inputData = inp;
            }
        })

        return inputData;
    }

    // Prepare the Row with inputs and returns it
    prepareRow = (rowData) => {

        return (
            <Row>
                {
                    rowData.map((id, index) => {

                        if (id === 'renew') {

                            return (
                                <Column className="renew-col">
                                    <Label>Renovação</Label>
                                    <SelectToggler>
                                        <InputComponent
                                            key='seguradora'
                                            type={'text'}
                                            name={'renew-seguradora'}
                                            placeholder={'Qual a seguradora?'}
                                            required={true}
                                        />
                                    </SelectToggler>
                                </Column>
                            )

                        } else if (id.includes('sel')) {

                            let data = this.getInput(id);

                            return (
                                <Column>
                                    <Label>{data.placeholder}</Label>
                                    <SelectComponent options={data.options} />
                                </Column>
                            )

                        } else if (id.includes('textarea')) {
                            let data = this.getInput(id);

                            return (
                                <Column className="col-aniversarios">
                                    <Label>{data.label}</Label>
                                    <TextArea placeholder={data.placeholder} />
                                </Column>
                            )

                        } else {

                            let data = this.getInput(id);

                            return (
                                <Column>
                                    <Label>{data.placeholder}</Label>
                                    <InputComponent
                                        key={index}
                                        type={data.type}
                                        name={data.name}
                                        placeholder={data.placeholder}
                                        required={data.required}
                                    />
                                </Column>
                            )
                        }

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
                <Row>
                    <Column className="col-obs">
                        <Label>Observação</Label>
                        <TextArea />
                    </Column>
                </Row>
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