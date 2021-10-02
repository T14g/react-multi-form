import React from 'react';
import SelectComponent from '../select/select.component';
import InputComponent from '../input/input.component';
import SelectToggler from '../select-toggler/select-toggler.component';
import TextArea from '../textarea/textarea.component';
import Aniversarios from '../aniversarios/aniversarios.component';

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
            inputsToShow: [],
            renewable: true
        };
    }

    componentDidMount() {

        let optionsKeys = Object.keys(_SELECT_OPTIONS);
        let titles = [];

        optionsKeys.forEach(option => {
            let title = _SELECT_OPTIONS[option].title;
            titles.push({ value: option, title: title })
        })

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
        let inputData = {};

        _INPUTS.forEach((inp) => {
            if (inp.id === id && inp.id) {
                inputData = inp;
            }
        })

        return inputData;
    }

    // Prepare the Row with inputs and returns it
    prepareRow = (rowData, index) => {

        return (
            <Row key={index}>
                {
                    rowData.map((id, index) => {

                        if (id.includes('sel')) {

                            let data = this.getInput(id);

                            return (
                                <Column key={index}>
                                    <Label>{data.placeholder}</Label>
                                    <SelectComponent options={data.options} />
                                </Column>
                            )

                        } else if (id.includes('aniversarios')) {
                            return (
                                <Column key={index} className="col-aniversarios">
                                    <Label>Quantos funcionários?</Label>
                                    <Aniversarios />
                                </Column>
                            )
                        } else if (id.includes('textarea')) {
                            let data = this.getInput(id);

                            return (
                                <Column key={index} className="col-aniversarios">
                                    <Label>{data.label}</Label>
                                    <TextArea placeholder={data.placeholder} />
                                </Column>
                            )

                        } else {

                            let data = this.getInput(id);

                            return (
                                <Column key={index}>
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

        let selected = this.state.selectedOption;
        let optionData = _SELECT_OPTIONS[option];
        let rows = optionData.rows;

        return (
            <React.Fragment>
                {
                    rows.map((row, index) =>
                        this.prepareRow(row, index)
                    )
                }
                <Row>
                    <Column className="col-obs">
                        <Label>Observação</Label>
                        <TextArea required={selected === 'outros' ? true : false} />
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

        let renewable = this.state.renewable;

        return (
            <FormContainer>

                <Container>
                    <Row className="row-top">
                        <Label>Selecione o tipo de seguro</Label>
                        <SelectComponent
                            handleSelect={this.handleSelection}
                            options={selectOptions} />

                        {
                            renewable ? (
                                <Column className="renew-col">
                                    <Label>Renovação</Label>
                                    <SelectToggler>
                                        <InputComponent
                                            key='seguradora'
                                            type='text'
                                            name='renew-seguradora'
                                            placeholder='Qual a seguradora?'
                                            required={true}
                                        />
                                    </SelectToggler>
                                </Column>
                            ) : null
                        }


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