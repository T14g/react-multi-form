const validateRenew = () => {

    let valid = true;
    const selectRenewEl = document.querySelector('.select-renew');

    if (selectRenewEl && selectRenewEl.value === 'Selecione') {
        
        valid = false;
        document.querySelector('.error-renew').style.display = "inline";

    } else if (selectRenewEl && selectRenewEl.value === 'no') {
        
        valid = true;
        document.querySelector('.error-renew').style.display = "none";

    } else if (selectRenewEl && selectRenewEl.value === 'yes') {

        const seguradoraEl = document.querySelector('.renew-seguradora').value;
        document.querySelector('.error-renew').style.display = "none";
        valid = false;

        if (seguradoraEl === null || seguradoraEl === '' || seguradoraEl === undefined) {
            valid = false;
            document.querySelector('.error-seguradora').style.display = "block";
        } else {
            valid = true;
            document.querySelector('.error-seguradora').style.display = "none";
        }

    }

    return valid;
}

const validateInputs = () => {

    let invalid = 0;
    const elementsInput = document.querySelectorAll('.form-body input');

    elementsInput.forEach((el) => {

        if (el.hasAttribute('required')) {

            if (el.value === null || el.value === '' || el.value === undefined) {
                invalid++;
                document.querySelector('.error-' + el.name).style.display = "block";
            } else {
                document.querySelector('.error-' + el.name).style.display = "none";
            }
        }

    });

    return invalid > 0 ? false : true;

}

const validateObservation = () => {

    let valid = true;
    const obsEl = document.querySelector('.text-observacao');

    if (obsEl.hasAttribute('required')) {

        if (obsEl.value.length < 3) {
            document.querySelector('.error-text-observacao').style.display = 'block';
            valid = false;
        } else {
            document.querySelector('.error-text-observacao').style.display = 'none';
            valid = true;
        }
    }else{
        return valid;
    }

    return valid;
}

const validateAniversarios = () => {

    let valid = true;
    const textAniversarios = document.querySelector('.text-aniversarios');

    if (textAniversarios) {
        if (textAniversarios.value.length < 3) {
            document.querySelector('.error-text-aniversarios').style.display = 'block';
            valid = false;
        } else {
            document.querySelector('.error-text-aniversarios').style.display = 'none';
            valid = true;
        }
    }else{
        return true;
    }

    return valid;
}

export const validator = () => {

    let valid = true;

    if (validateInputs() && validateRenew() && validateObservation() && validateAniversarios()){
        valid = true;
    }else{
        valid = false;
    }
    
    return valid;
}