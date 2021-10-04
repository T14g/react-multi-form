import React from 'react';
import SelectComponent from '../select/select.component';
import InputComponent from '../input/input.component';
import SelectToggler from '../select-toggler/select-toggler.component';
import { renderOptionRows } from '../../helpers/view';
import { _SELECT_OPTIONS } from './data';
import { handleSubmit } from '../../helpers/message';

import {
    FormStyled,
    Container,
    Row,
    Column,
    InnerContainer,
    Label,
    Error
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

    // Save selected option on state
    handleSelection = (e) => {
        let selected = e.target.value;
        this.setState({
            selectedOption: selected
        });
    }

    render() {

        let selectOptions = this.state.selectOptions;
        let selected = this.state.selectedOption;
        let renewable = this.state.renewable;

        return (
            <FormStyled method="POST" onSubmit={handleSubmit}>

                <Container>
                    <Row className="row-top">
                        <Label className="label-tipo">Selecione o tipo de seguro</Label>
                        <SelectComponent
                            handleSelect={this.handleSelection}
                            options={selectOptions}
                            customClass='tipo-seguro'
                        />

                        {
                            renewable ? (
                                <Column className="renew-col">
                                    <Label>Renovação</Label>
                                    <SelectToggler>
                                    <Error className='error-seguradora'>
                                        Digite o nome da seguradora!
                                    </Error>
                                        <InputComponent
                                            key='seguradora'
                                            type='text'
                                            name='renew-seguradora'
                                            customClass="renew-seguradora"
                                            placeholder='Qual a seguradora?'
                                            required={true}
                                        />
                                    </SelectToggler>
                                    <Error className='error-renew'>
                                        Selecione se quer renovar!
                                    </Error>
                                </Column>
                            ) : null
                        }

                    </Row>
                </Container>

                <InnerContainer className="form-body">
                    {selected ? renderOptionRows(selected) : null}
                </InnerContainer>

            </FormStyled>
        )
    }
}
export default Form;