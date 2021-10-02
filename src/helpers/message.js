export const handleSubmit = () => {
    const message = createMessage();
    console.log(message);
}

// Create the message to be sent
const createMessage = () => {

    const tipoSeguro = document.querySelector('.tipo-seguro').value;
    const elementsInput = document.querySelectorAll('.form-body input');
    const renewableSelect = document.querySelector('.select-renew').value;

    let message = 'Iai Rampon,\n\n';

    message += `Tipo de seguro: ${tipoSeguro} \n`

    if (renewableSelect === 'yes') {
        const renewSeguradora = document.querySelector('.renew-seguradora').value;
        message += `Renovação: sim \n`
        message += `Seguradora: ${renewSeguradora} \n`
    } else {
        message += `Renovação: não \n`
    }


    elementsInput.forEach((el) => {
        message += `${el.placeholder} : ${el.value}\n`
    })

    message += 'Fim da mensagem';

    return message;

}

// Send Message via POST Request to mailer
const sendMessage = (message) => {
    const mailerURL = 'http://mattosseguros.com.br/mailer.php';

    fetch(mailerURL, {
        method: "POST",
        body: JSON.stringify({ 'message': message })
    });
}


