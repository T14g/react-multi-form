import React from 'react';
import SelectComponent from '../select/select.component';
import TextArea from '../textarea/textarea.component';
import { Message } from './aniversarios.styles';

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
                />

                {
                    showTextarea ? (
                        <TextArea
                            placeholder={"Digite aqui as datas de aniversário : Ex: 10/10/1994 ; 01/01/1994; 10/01/1993"}
                        />
                    ) : (
                        <Message>
                            Mais de 10 funcionários, entre em contato!
                        </Message>
                    )
                }

            </React.Fragment>
        );
    }

}

export default Aniversarios;