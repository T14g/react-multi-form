export const validator = () => {
    let valid = true;

    const elementsInput = document.querySelectorAll('.form-body input');
    const selectRenewEl = document.querySelector('.select-renew');

    elementsInput.forEach((el) => {
        if (el.hasAttribute('required')) {
            if (el.value === null || el.value === '' || el.value === undefined) {
                valid = false;
                document.querySelector('.error-' + el.name).style.display = "block";

            } else {
                valid = true;
                document.querySelector('.error-' + el.name).style.display = "none";

            }
        }
    });
    

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