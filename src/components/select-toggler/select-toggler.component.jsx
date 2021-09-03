import React from 'react';

class SelectToggler extends React.Component {

    constructor() {
        super();

        this.state = { showingHidden: false };
    }

    handleSelect = (e) => {
        const showing = e.target.value;
        console.log(showing);

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
                    <select onChange={(e) => this.handleSelect(e)}>
                        <option >Selecione</option>
                        <option value="yes">Sim</option>
                        <option value="no">Não</option>
                    </select>
                    {this.props.children}
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <select onChange={(e) => this.handleSelect(e)}>
                        <option >Selecione</option>
                        <option value="yes">Sim</option>
                        <option value="no">Não</option>
                    </select>
                </React.Fragment>
            )
        }
    }

    render() {
        return this.renderHelper()
    }
}

export default SelectToggler;