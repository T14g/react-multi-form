import { validator } from "./validator";

export const handleSubmit = (e) => {
    e.preventDefault();
    const message = createMessage();
    const valid = validator();

    if (valid) {
        alert("Enviando...");
        console.log(message);
    } else {
        alert("Falha em validar!");
    }
}

// Create the message to be sent
const createMessage = () => {

    const tipoSeguro = document.querySelector('.tipo-seguro').value;
    const elementsInput = document.querySelectorAll('.form-body input');
    const elementsSelect = document.querySelectorAll('.form-body select');
    const elementsTextarea = document.querySelectorAll('.form-body textarea');
    const renewableSelect = document.querySelector('.select-renew');

    let message = 'Iai Rampon,\n\n';

    message += `Tipo de seguro: ${tipoSeguro} \n`

    if (renewableSelect && renewableSelect.value === 'yes') {
        const renewSeguradora = document.querySelector('.renew-seguradora').value;
        message += `Renovação: sim \n`
        message += `Seguradora: ${renewSeguradora} \n`
    } else {
        message += `Renovação: não \n`
    }

    elementsInput.forEach((el) => {
        message += `${el.placeholder} : ${el.value}\n`
    })

    if(elementsSelect.length > 0){
        elementsSelect.forEach((el) => {
            message += `${el.getAttribute('placeholder')} : ${el.value}\n`
        })
    }

    if(elementsTextarea.length > 0){
        elementsTextarea.forEach((el) => {
            message += `${el.getAttribute('placeholder')} : ${el.value}\n`
        })
    }

    message += 'Fim da mensagem';

    sendMessage(message);

}

// Send Message via POST Request to mailer
const sendMessage = (message) => {
    const mailerURL = 'http://mattosseguros.com.br/mailer.php';

    try {
        fetch(mailerURL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'message': message })
        });
    } catch (e) {
        console.log(e);
    }

}


