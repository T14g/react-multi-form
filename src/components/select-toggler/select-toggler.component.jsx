import React from 'react';
import { Select, Option } from './select-toggler.styles';
class SelectToggler extends React.Component {

    constructor() {
        super();

        this.state = { showingHidden: false };
    }

    handleSelect = (e) => {
        const showing = e.target.value;

        if (showing === 'yes') {
            this.setState({ showingHidden: true })
        } else {
            this.setState({ showingHidden: false })
        }
    }

    renderHelper = () => {
        const { showingHidden } = this.state;

        if (showingHidden) {
            return (
                <React.Fragment>
                    <Select onChange={(e) => this.handleSelect(e)} className="select-renew">
                        <Option >Selecione</Option>
                        <Option value="yes">Sim</Option>
                        <Option value="no">Não</Option>
                    </Select>
                    {this.props.children}
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Select required={true} onChange={(e) => this.handleSelect(e)} className="select-renew">
                        <Option >Selecione</Option>
                        <Option value="yes">Sim</Option>
                        <Option value="no">Não</Option>
                    </Select>
                </React.Fragment>
            )
        }
    }

    render() {
        return this.renderHelper()
    }
}

export default SelectToggler;