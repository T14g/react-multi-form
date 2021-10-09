import React from 'react';
import SelectComponent from '../select/select.component';
import TextArea from '../textarea/textarea.component';
import { Message } from './aniversarios.styles';
import { Error } from '../form/form.styled';

class Aniversarios extends React.Component {

    constructor() {
        super();

        this.state = {
            showTextarea: true,
            options: [
                { 'title': '2', 'value': '2' },
                { 'title': '3', 'value': '3' },
                { 'title': '4', 'value': '4' },
                { 'title': '5', 'value': '5' },
                { 'title': '6', 'value': '6' },
                { 'title': '7', 'value': '7' },
                { 'title': '8', 'value': '8' },
                { 'title': '9', 'value': '9' },
                { 'title': '10', 'value': '10' },
                { 'title': 'Mais de 10', 'value': 'more' },
            ]
        }
    }

    handleChange = (e) => {
        let selected = e.target.value;

        if (selected === 'more') {
            this.setState({ showTextarea: false });
        } else {
            this.setState({ showTextarea: true });
        }
    }

    render() {

        let options = this.state.options;
        let showTextarea = this.state.showTextarea;

        return (
            <React.Fragment>
                <SelectComponent
                    options={options}
                    handleSelect={this.handleChange}
                    placeholder="Total de datas:"
                />

                {
                    showTextarea ? (
                        <>
                        <Error className="error-text-aniversarios">Preencha corretamente!</Error>
                        <TextArea
                            customClass="text-aniversarios"
                            placeholder="Datas de nascimento"
                        />
                        </>
                    ) : (
                        <Message>
                            Mais de 10 funcionários, entre em contato preenchendo o campo observação abaixo!
                        </Message>
                    )
                }

            </React.Fragment>
        );
    }

}

export default Aniversarios;