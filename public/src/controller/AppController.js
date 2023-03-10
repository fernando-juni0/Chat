

class AppController{


    constructor(){
        console.log('AppController: OK');

        this.elementsPrototype()
        this.loadElements()

    }

    loadElements() {

        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.el[Format.getCamelcase(element.id)] = element;

        });

    }

    elementsPrototype(){

        Element.prototype.hide = function () {
            //Esconde os elementos da pagina
            this.style.display = 'none';
        }

        Element.prototype.show = function () {
            //Mostra os elementos da pagina
            this.style.display = 'block';
        }

        Element.prototype.toggle = function () {
            //Troca o estado dos elementos da pagina (caso esteja ativo ele desativa ou caso ele esteja desativado ele ativa)
            if (this.style.display === 'none') {
                this.show();
            } else {
                this.hide();
            }
        }

        Element.prototype.on = function (event,fn) {
            //Cria Multiplos eventos

            event.split(' ').forEach(events=>{
                this.addEventListener(events, fn)
            })

        }
    }
}