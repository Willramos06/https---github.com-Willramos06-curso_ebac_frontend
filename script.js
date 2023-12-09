const form = document.getElementById('formulary');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const totalA = Number(document.getElementById('camp-A').value);
    const totalB = Number(document.getElementById('camp-B').value);
    let formEValido = false;
    const MenssagemSucesso = `O numero do campo B <b>${totalB}</b> é maior que o numero do campo A <b>${totalA}</b>`
    const MenssagemError = `O numero do campo B <b>${totalB}</b> é menor que o numero do campo A <b>${totalA}</b>`

    function validaNumero(totalA, totalB) {
        return totalA < totalB;
    }

    const containerMenssagemSucesso = document.querySelector('.messagem-sucess');
    const containerMenssagemError = document.querySelector('.error-menssage');
    formEValido = validaNumero(totalA, totalB);
    if (formEValido) {
        containerMenssagemError.innerHTML = MenssagemSucesso;
        containerMenssagemSucesso.style.display = 'block';
        containerMenssagemError.style.display = 'none';

    } else {
        containerMenssagemError.innerHTML = MenssagemError;
        containerMenssagemError.style.display = 'block';
        containerMenssagemSucesso.style.display = 'none';
    }

});