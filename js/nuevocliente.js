import {mostrarAlerta} from './funciones.js';
import { nuevaCompra } from './API.js'

(function(){

    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit',validarEstudiante);
    formulario.addEventListener('change', calcularTotal)

    const producto = document.querySelector('#producto');
    const precioUnitario = document.querySelector('#precioUnitario');
    const cantidad = document.querySelector('#cantidad');
    const total = document.querySelector('#total');

    function validarEstudiante(e){
        e.preventDefault();

        if(producto.value == "0"){
            mostrarAlerta('Por favor, Seleccione el Producto');
            return;
        }

        if(cantidad.value == ""){
            mostrarAlerta('Por favor, Agrege una cantidad');
            return;
        }

        // Validacion Correcta

        const compra = {
            nombreProducto: producto.options[producto.selectedIndex].text,
            precioUnitario: precioUnitario.value,
            cantidad: cantidad.value,
            total: total.value
        }

        nuevaCompra(compra);

        

    }

    function calcularTotal(){

        precioUnitario.value = producto.value;

        //alert(producto.options[producto.selectedIndex].text)

        total.value = cantidad.value * precioUnitario.value;
    }


})();