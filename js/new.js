(function(){


    function Person (name, lastName, age){
        this.name = name
        this.lastName = lastName
        this.age = age

        this.getFullName = function (){
            return this.name + ' ' +this.lastName;
        }

        this.getAge = function(){
            return this.age;
        }

        this.addAge = function (idade){
         return this.age + idade;
        }



    }
    
    var pessoa1 = new Person('Fagner', 'Fernandes Douetts', 26 )

    var pessoa2 = new Person('Rebeca', 'Cunha de Oliveira', 20 )

    var pessoa3 = new Person('Neide', 'Fernandes de Medeiros', 30 )

    console.log( 'Novas pessoas criadas à partir de Person:', pessoa1, pessoa2, pessoa3);


    console.log( '\nNomes das pessoas:', pessoa1.getFullName(), pessoa2.getFullName(), pessoa3.getFullName());
    console.log(pessoa1.getFullName() + ' tem ' + pessoa1.getAge() + ' Anos')


    console.log(pessoa1.getFullName() + ' agora tem ' + pessoa1.addAge(10) + ' Anos')



})();
