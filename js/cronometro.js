(function (doc, win) {


    var $inputcontador = doc.querySelector('[data-js="counter"]');

    var $buttonstart = doc.querySelector('[data-js="start"]');
    var $buttonstop = doc.querySelector('[data-js="stop"]');
    var $buttonreset = doc.querySelector('[data-js="reset"]');

    var counter = 0;
    var temporizador;

    function cronometro() {
        $inputcontador.value = counter;
        counter++

        if (counter > 1000)
            return;
        temporizador = setTimeout(cronometro, 1000);

    }

    function stopTime() {
        clearTimeout(temporizador)
    }

    function resetTime() {
        counter = 0;
        $inputcontador.value = 0;
    }


    $buttonstart.addEventListener('click', function () {

        cronometro();
    }, false)

    $buttonstop.addEventListener('click', function () {

        stopTime();
    }, false)

    $buttonreset.addEventListener('click', function () {
        resetTime();

    }, false)


}(document, window));