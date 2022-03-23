(function (DOM, doc) {

    'use strict'

    var $logradouro = new DOM('[data-js="logradouro"]')
    var $bairro = new DOM('[data-js="bairro"]')
    var $estado = new DOM('[data-js="estado"]')
    var $Cidade = new DOM('[data-js="cidade"]')
    var $cep = new DOM('[data-js="CEP"]')
    var $formCep = new DOM('[data-js="form"]');
    var $inputCep = new DOM('[data-js="cep"]');
    var ajax = new XMLHttpRequest();
    var $Requ = new DOM('[data-js="Req"]')
    $formCep.on('submit', handleSubmitForm)



    function handleSubmitForm(event) {
        event.preventDefault();
        var newCep = getUrl();
        ajax.open('GET', newCep);
        ajax.send();
        getMessage('loading');
        ajax.addEventListener('readystatechange', handlereadystatechange);

    }

    function getUrl() {
        var firstcep = $inputCep.get()[0].value;
        var cepTratado = firstcep.replace(/[^\d]+/g, '')

        return 'https://viacep.com.br/ws/' + cepTratado + '/json/'

    }

    function isRequestOK() {
        return ajax.readyState === 4 && ajax.status === 200
    }

    function handlereadystatechange() {

        if (isRequestOK()) {
            getMessage('ok');
            fillCEPField();
            
        }
        

    }

    function fillCEPField() {

        var dadosRecebidos = parseData();

        if(!dadosRecebidos){
            getMessage('error');
        }
        $logradouro.get()[0].textContent = dadosRecebidos.logradouro
        $bairro.get()[0].textContent = dadosRecebidos.bairro
        $estado.get()[0].textContent = dadosRecebidos.uf
        $Cidade.get()[0].textContent = dadosRecebidos.localidade
        $cep.get()[0].textContent = dadosRecebidos.cep



    }

    function parseData() {
        var result;

        try {
            result = JSON.parse(ajax.responseText);
        } catch (error) {
            result = null;
        }
        return result;
    }


   

    function getMessage(type) {

        var cep = $inputCep.get()[0].value

        var message = {
            loading: 'Buscando informações para o CEP '+cep+'...',
            error: 'Não encontramos o endereço para o CEP '+cep+'',
            ok: 'Endereço referente ao CEP '+cep+':'
        }

        return $Requ.get()[0].textContent = message[type];


    }

}(window.DOM,document))