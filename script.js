
function proceeed() {
    let holder = document.querySelector('.holder');
    let date = document.querySelector('.date-expiration');
    let cardNumber = document.querySelector('.card-number');
    let cvc = document.querySelector('.cvc-code');
    let labelHolder = document.querySelector('.label-holder');
    let labelDate = document.querySelector('.label-date');
    let labelCard = document.querySelector('.label-card');
    let labelCvc = document.querySelector('.label-cvc')
    let sucess = '<div class="alert-sucess">Sucess</div>';
    let error = '<div class="alert-error">incorrect data</div>';




    function checkHolder() {
        if (holder.value.length > 6) {
            labelHolder.innerHTML = `<label for="holder" class="label-holder">CARD HOLDER ${sucess}</label>`;
        }
        else {
            labelHolder.innerHTML = `<label for="holder" class="label-holder">CARD HOLDER ${error}</label>`;
        }
    } checkHolder()


    function checkDate() {
        if (date.value.length > 1) {
            labelDate.innerHTML = `<label for="date-expiration">EXPIRATION DATE ${sucess}</label>`;
        }
        else {
            labelDate.innerHTML = `<label for="date-expiration">EXPIRATION DATE ${error}</label>`;
        }
    } checkDate()

    function checkNumberCard() {
        if (cardNumber.value.length > 10) {
            labelCard.innerHTML = `<label for="number" class="label-card">CARD NUMBER ${sucess}</label>`;
        }
        else {
            labelCard.innerHTML = `<label for="number" class="label-card">CARD NUMBER ${error}</label>`;
        }
    } checkNumberCard()


    function checkCvc() {
        if (cvc.value.length > 3) {
            labelCvc.innerHTML = `<label for="cvc-code" class="label-cvc">CVC ${sucess}</label>`;
        }
        else {
            labelCvc.innerHTML = `<label for="cvc-code" class="label-cvc">CVC ${error}</label>`;
        }
    } checkCvc()

};