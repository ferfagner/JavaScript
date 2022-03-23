(function () {

    'use strict';


    function cleanCPF(cpf) {

        return cpf.replace(/\D/g, '');

    }

    console.log('Limpando CPFs:');

    var todosCPF = ['049-214 3421-1',
        '210.458.522-05',
        '735 500 794 - 22',
        '101.123-131x32']

    todosCPF.forEach(function (cpf) {
        console.log(cleanCPF(cpf))
    });

    console.log('\nFormatando CPFs corretamente:');


    todosCPF.forEach(function (cpf) {
        console.log(cleanCPF(cpf).replace(/(\d{1,3})(\d{1,3})(\d{1,3})(\d{1,2})/, function (total, arg1, arg2, arg3, arg4) {
            return arg1 + '.' + arg2 + '.' + arg3 + '-' + arg4
        }))
    })

    var text = "Os meses de janeiro, junho e julho começam com a letra j.";



    console.log('\nMatch com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.":', text.match(/j\w{1,4} /g));

    var tags = "<div><section><blockquote>Texto <img /></blockquote></section></div>"


    console.log('\nMatch com a abertura de uma tag HTML:', tags.match(/<\w{1,}>/g));

    var tag2 = "<div><ul><li></li><li></li><li><span></span></li></ul></div>"

    console.log('\nMatch com a abertura de uma tag HTML:', tag2.match(/<\w{1,}><\/\w{1,}\/?>/g));



    var expressao = "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"

    console.log(expressao.replace(/(<\w{1,}>)([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{1,})(<\/\w{1,}\/?>)/g,

    '-- $1 O texto dentro da tag $1 é $2 $3'



    ))


}());