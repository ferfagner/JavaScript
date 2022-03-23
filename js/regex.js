(function () {

    'use strict';

    

    var text = "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de O Centauro de Luvas, foi um militar, político, abolicionista e monarquista brasileiro.";

    var novo = text.replace(/Manuel Marques de Sousa/, 'Fagner Fernandes Douetts');

    console.log('Adicionando seu nome no texto:', novo);

    var naturalidade = novo.replace(/brasileiro/, 'Brasiliense')

    console.log('\nTrocando naturalidade:', naturalidade);

    var numeros = naturalidade.replace(/\d/g, '-')

    console.log('\nTrocando números por -: ', numeros);

    var dah = numeros.replace(/[D-Hd-h]/g, '0')

    console.log('\nTrocando de "D" a "h" por "0": ', dah);

    var aea = dah.replace(/[Aa]/g, '4')
    console.log('\nTrocando "A" e "a" por "4": ', aea);

    var centauro = text.replace(/(O Centauro de Luvas)/g, function (texto) {
        return texto.toUpperCase();
    })

    console.log('\n"O Centauro de Luvas" em caixa alta: ', centauro);

    function getMonthNumber(nameMonth) {

        var recebido = {

            'Janeiro': '01',
            'Fevereiro': '02',
            'Março': '03',

            'Abril': '04',

            'Maio': '05',

            'junho': '06',

            'julho': '07',

            'Agosto': '08',

            'Setembro': '09',

            'Outrubro': '10',

            'Novrembro': '11',

            'Dezembro': '12',


        }

        return  recebido[nameMonth];

    }

    console.log( '\nMeses representados por números:', getMonthNumber('Novrembro') );


    var regexDate = text.replace(/(13) (de) (junho) (de) (1804)/g, function(total, arg1, arg2, arg3, arg4, arg5){

        return arg1+ '/' + getMonthNumber(arg3) + '/' + arg5


    })
''.match
    console.log(regexDate)

    var replaceDate = text.replace(/(\d\d) (de) (junho|julho) (de) (\d\d\d\d)/g, function(total, arg1, arg2, arg3, arg4, arg5){

        return arg1+ '/' + getMonthNumber(arg3) + '/' + arg5


    })

    console.log(replaceDate)


})();