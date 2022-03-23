(function(){
    'use strict';

    var name = 'fagner'

    for(let i = 0; i < name.length; i++){

        console.log(name[i] + ' é a ' + (i + 1) + 'º letra do meu nome.');
    }



    var fullName = 'fagner-fernandes-douetts'

 
       var separado =  fullName.split('-').map(function(name){
            return name[0].toUpperCase() + name.slice(1);
       }).join(' ');



    
    console.log('\nNome convertido à partir de um slug: ', separado);


    var arr = ['fagner', 'rebeca', 'neide', 'nayara', 'farley', 'tiago']

    var arrstring = arr.reduce(function(acumulado, atual, index){
        var sparetor = arr.length - 1 === index ? ' e ': ', ';
        return acumulado + sparetor + atual
    }).concat(' são meus amigos')

    console.log(arrstring);


    var nomes = 'Roberto'
    console.log( '\nEra "Roberto", agora é: ' + nomes.replace('to', 'ta') );



    var nomess= 'fernando'

    console.log( '\nParte de uma string:' + nomess.substring(8,3) );


     var onome = 'FaGner'; 
     var newName = [];
     console.log( 'intercalado ' + newName );

     for(let i = 0; i < onome.length; i++){

       newName.push( i % 2 === 0 ? onome[i].toLocaleUpperCase() : onome[i].toLocaleLowerCase() );
        
      
     }


    
     console.log( 'intercalado 2 ' + newName.join('') );

    
})();