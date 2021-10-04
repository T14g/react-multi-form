import React from "react";
import { _INPUTS, _SELECT_OPTIONS } from "../components/form/data";
import { Row, Column, Label, Submit, Error } from "../components/form/form.styled";
import SelectComponent from "../components/select/select.component";
import Aniversarios from "../components/aniversarios/aniversarios.component";
import TextArea from "../components/textarea/textarea.component";
import InputComponent from "../components/input/input.component";
import { handleSubmit } from "../helpers/message";

// Get input data by Id
export const getInput = (id) => {
    let inputData = {};

    _INPUTS.forEach((inp) => {
        if (inp.id === id && inp.id) {
            inputData = inp;
        }
    })

    return inputData;
}

// Prepare the Row with inputs and returns it
export const prepareRow = (rowData, index) => {

    return (
        <Row key={index}>
            {
                rowData.map((id, index) => {

                    if (id.includes('sel')) {

                        let data = getInput(id);

                        return (
                            <Column key={index}>
                                <Label>{data.placeholder}</Label>
                                <SelectComponent
                                    options={data.options}
                                    name={data.name}
                                    placeholder={data.placeholder} />
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
                        let data = getInput(id);

                        return (
                            <Column key={index} className="col-aniversarios">
                                <Label>{data.label}</Label>
                                <TextArea placeholder={data.placeholder} />
                            </Column>
                        )

                    } else {

                        let data = getInput(id);

                        return (
                            <Column key={index}>
                                <Label>{data.placeholder}</Label>
                                <Error className={`error-${data.name}`}>
                                    Preencha corretamente!
                                </Error>
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
export const renderOptionRows = (option) => {

    let optionData = _SELECT_OPTIONS[option];
    let rows = optionData.rows;

    return (
        <React.Fragment>
            {
                rows.map((row, index) =>
                    prepareRow(row, index)
                )
            }
            <Row>
                <Column className="col-obs">
                    <Label>Observação</Label>
                    <TextArea
                        required={option === 'outros' ? true : false}
                        customClass='text-observacao'
                        placeholder="Observação"
                    />
                </Column>
            </Row>
            <Submit
                onClick={handleSubmit}
            >Enviar</Submit>
        </React.Fragment>
    )
}