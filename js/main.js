(function (doc, win) {

    'use strict'


    var username = prompt('Qual seu nome? ') || 'Desconhecido';

    var email = prompt('Qual seu e-mail? ');

    alert('bem vindo ' + username)


    var $inputUsername = doc.querySelector('[type="text"]');

    var $inputEmail = doc.querySelector('[type="email"]');

    var $message = doc.querySelector('textarea');

    var $button = doc.querySelector('[type="submit"]');

    $inputEmail.value = email;
    $inputUsername.value = username;

    function isValidEmail(email) {

        var regex = new RegExp('^[a-zA-Z+0-9_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$', 'gmi');

        return regex.test(email)
         
    }


    $button.addEventListener('click', function () {

        if (!$inputUsername.value)
            return alert("Preencha o nome do usuário!")
        if (!$inputEmail.value)
            return alert("Preencha com o e-mail valido!")
        if (!$message.value)
            return alert("Preencha sua mensagem")
        if (!isValidEmail($inputEmail.value))
            return alert("Preencha com e-mail valido")
        if (confirm('tem certeza que deseja enviar essa mensagem?'))
            return alert('enivado com sucesso')
        alert('Não enviado')

    }, false)








}(document, window));