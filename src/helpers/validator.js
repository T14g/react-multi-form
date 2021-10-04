export const validator = () => {
    let valid = true;

    const elementsInput = document.querySelectorAll('.form-body input');
    const selectRenewEl = document.querySelector('.select-renew').value;
    console.log(selectRenewEl);

    if(selectRenewEl === 'Selecione'){
        valid = false;
        document.querySelector('.error-renew').style.display = "inline";
    }else if(selectRenewEl === 'No'){
        valid = true;
        document.querySelector('.error-renew').style.display = "none";
    }else if(selectRenewEl === 'Yes'){
        const seguradoraEl = document.querySelector('.renew-seguradora').value;

        if(seguradoraEl === null || seguradoraEl === '' || seguradoraEl === undefined){
            valid = false;
            document.querySelector('.error-seguradora').style.display = "block";
        }else{
            valid = true;
            document.querySelector('.error-').style.display = "none";
        }
        
    }

    elementsInput.forEach((el) => {
        if (el.hasAttribute('required')) {
            if(el.value === null || el.value === '' || el.value === undefined){
                valid = false;
                document.querySelector('.error-' + el.name).style.display = "block";
            }else{
                valid = true;
                document.querySelector('.error-' + el.name).style.display = "none";
            }
        }
    });

    if(valid){
        alert("All validated");
    }

    // elementsSelect.forEach((el) => {
    //     if (el.hasAttribute('required')) {

    //         console.log(el);
    //         // if(el.value === null || el.value === '' || el.value === undefined){
    //         //     valid = false;
    //         // }
    //     }
    // });


}