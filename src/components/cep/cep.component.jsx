import { useState } from 'react';
import InputComponent from '../input/input.component';

const Cep = () => {

    const [cepState, setCepState] = useState("");

    const handleChange = (e) => {

        let cep = e.target.value;
        cep = cep
            .replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");

        setCepState(cep);

    }

    return (
        <InputComponent
            handleChange={handleChange}
            value={cepState}
            name="cep"
            type="text"
            required={true}
            placeholder="CEP" />

    );

}

export default Cep;