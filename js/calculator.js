(function (doc, win) {

    'use strict'

    var $inputVisor = doc.querySelector('[data-js="visor"]');
    var $buttonNumber = doc.querySelectorAll('[data-js="button-number"]');
    var $buttonOprator = doc.querySelectorAll('[data-js="button-operator"]');
    var $buttonCE = doc.querySelector('[data-js="button-ce"]');
    var $buttonEqual = doc.querySelector('[data-js="equal"]');


    function initEvents() {
        $buttonCE.addEventListener('click', handleClickCE, false)
        $buttonEqual.addEventListener('click', handleClickEqual, false)
        Array.prototype.forEach.call($buttonNumber, function (button) {
            button.addEventListener('click', handleClickNumber, false)
        })
        Array.prototype.forEach.call($buttonOprator, function (button) {
            button.addEventListener('click', handleClickOperator, false)
        })
    }



    function handleClickNumber(event) {
        $inputVisor.value += this.value
    }

    function handleClickOperator(event) {
        $inputVisor.value = removeLastItemAnOpration($inputVisor.value);

        $inputVisor.value += this.value
    }

    function handleClickEqual() {
        removeLastItemAnOpration($inputVisor.value);
        var allValues = $inputVisor.value.match(getOprationsRegex())
        $inputVisor.value = allValues.reduce(calculateAllValues);
    }

    function getOprationsRegex(){
        return new RegExp('\\d+['+ getOprations().join('') +']?','g')
    }

    function calculateAllValues(acc, actual) {
        var fistValue = acc.slice(0, -1);
        var oprator = acc.split('').pop();
        var lastValue = removeLastItemAnOpration(actual);
        var lastOprator = lastItemAnOpration(actual) ? actual.split('').pop : '';
        return initOprator(oprator, fistValue, lastValue) + lastOprator
    }

    function initOprator(oprator, fistValue, lastValue) {
        switch (oprator) {
            case '+':
                return Number(fistValue) + Number(lastValue);
            case '-':
                return Number(fistValue) - Number(lastValue);
            case '*':
                return Number(fistValue) * Number(lastValue);
            case '/':
                return Number(fistValue) / Number(lastValue);
        }
    }

    function lastItemAnOpration(number) {
        var oprations = getOprations();
        var lastItem = number.split('').pop()
        return oprations.some(function (operador) {
            return operador === lastItem;
        })

    }

    function getOprations() {
        return Array.prototype.map.call($buttonOprator, function (button) {
           return button.value;

        })
    }

    function removeLastItemAnOpration(string) {
        if (lastItemAnOpration(string)) 
            return string.slice(0, -1);
        return string
    }



    function handleClickCE(event) {
        $inputVisor.value = 0;
    }

    initEvents();

}(document, window));