(function(doc, win){
    'use strict'

    var person1 = {
        name : 'Fagner',
        lastName: 'Fernades Douetts'
    }
    var person2 = {
        name : 'Neide',
        lastName: 'Fernandes de Medeiros'
    }

    function getFullName(){

        return this.name + ' ' + this.lastName;

    };

    console.log('O nome das pessoas é:' , getFullName.call(person1))
    console.log('O nome das pessoas é:' , getFullName.call(person2))

    
    
    function sum(){
        console.log(arguments)

     return Array.prototype.reduce.call(arguments, function(acc, cur){

        return +acc + +cur;

        });


    };

    console.log( '\nSomar alguns numeros:', sum(1,2,3,4,5)  );



    var userEntry = prompt('Entre com alguns números que serão somados:')


    console.log( '\nEntrada do usuário:', userEntry );

      var number = justNumbers(userEntry);

    

    function justNumbers (num){

        return num.match(/\d/g)
        
        //num.replace(/\D+/g, ',').split(',');



    }

    console.log( '\nFunção que limpa entrada do usuário (somente números):', number );

    

    console.log( '\nSoma:', sum.apply(sum, number) );

}(document, window))