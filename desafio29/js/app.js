(function ($, doc, win) {

    'use strict'

    var app = (function () {

        var $nomeEmpresa = $('[data-js="nomeempresa"]')
        var $telefone = $('[data-js="telefone"]')

        return {

            init: function init() {

                this.companyInfo()
                this.initEvents()



            },

            initEvents: function initEvents() {
                $('[data-js="form-cadastro"]').on('submit', this.handleSubmit);
            },

            handleSubmit: function handleSubmit(event) {
                event.preventDefault();
                var $table = $('[data-js="inserecar"]').get()
                $table.appendChild(app.creatNewCar())
            },

            creatNewCar: function creatNewCar() {
                var $fragment = doc.createDocumentFragment()
                var $td = doc.createElement('tr')
                var $imagem = doc.createElement('td')
                var $imagemTag = doc.createElement('img')
                var $ano = doc.createElement('td')
                var $marca = doc.createElement('td')
                var $placa = doc.createElement('td')
                var $cor = doc.createElement('td')

                $imagemTag.src = $('[data-js="image"]').get().value;
                $ano.textContent = $('[data-js="ano"]').get().value;
                $marca.textContent = $('[data-js="marca"]').get().value;
                $placa.textContent = $('[data-js="placa"]').get().value;
                $cor.textContent = $('[data-js="cor"]').get().value;

                $imagem.appendChild($imagemTag)


                $td.appendChild($imagem);
                $td.appendChild($ano);
                $td.appendChild($marca);
                $td.appendChild($placa);
                $td.appendChild($cor);

                return $fragment.appendChild($td);
            },

            companyInfo: function companyInfo() {
                var ajax = new XMLHttpRequest();
                ajax.open('GET', 'js/company.json', true);
                ajax.send();
                ajax.addEventListener('readystatechange', this.getCompanyInfo, false)

            },

            getCompanyInfo: function getCompanyInfo() {
                if (!app.isReady.call(this))
                    return;
                var data = app.parseData(this)
                $nomeEmpresa.get().textContent = data.name
                $telefone.get().textContent = data.phone


            },

            isReady: function isReady() {
                return this.readyState === 4 && this.status === 200
            },

            parseData: function parseData(data) {
                var result;

                try {
                    result = JSON.parse(data.responseText);
                } catch (error) {
                    result = null;
                }
                return result;
            }

        }
    })();


    app.init();


}(window.DOM, document, window))