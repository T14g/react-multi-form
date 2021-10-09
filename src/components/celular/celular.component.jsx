import { useState } from 'react';
import InputComponent from '../input/input.component';

const Celular = () => {

    const [phone, setPhone] = useState("");

    const handleChange = (e) => {

        let num = e.target.value;
        num = num.replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");

        setPhone(num);
    }

    return (
        <InputComponent
            handleChange={handleChange}
            value={phone}
            name="cel-whats"
            type="text"
            required={true}
            placeholder="Celular/Whatsapp" />

    );

}

export default Celular;