import { obtenerCompra, editarCompra } from './API.js';
import {mostrarAlerta} from './funciones.js';

(function() {

    const productoInput = document.querySelector('#producto');
    const precioUnitarioInput = document.querySelector('#precioUnitario');
    const cantidadInput = document.querySelector('#cantidad');
    const totalInput = document.querySelector('#total');

    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {

        const parametrosURL = new URLSearchParams(window.location.search);

        const idCompra = parseInt( parametrosURL.get('id'));

        const compra = await obtenerCompra(idCompra);

        mostrarCompra(compra);

        //Submit al form
        const formulario = document.querySelector('#formulario');

        formulario.addEventListener('submit',validarEstudiante);
        formulario.addEventListener('change', calcularTotal)

    });

    function mostrarCompra(compra){
        
        const { id, cantidad, nombreProducto, precioUnitario, total } = compra;

        idInput.value = id;
        cantidadInput.value = cantidad;
        productoInput.value = precioUnitario;
        precioUnitarioInput.value = precioUnitario;
        totalInput.value = total;

    }


    function validarEstudiante(e){
        e.preventDefault();

        if(productoInput.value == "0"){
            mostrarAlerta('Por favor, Seleccione el Producto');
            return;
        }

        if(cantidadInput.value == ""){
            mostrarAlerta('Por favor, Agrege una cantidad');
            return;
        }

        // Validacion Correcta
        const compra = {
            nombreProducto: productoInput.options[productoInput.selectedIndex].text,
            precioUnitario: precioUnitarioInput.value,
            cantidad: cantidadInput.value,
            total: totalInput.value,
            id: parseInt(idInput.value)
        }

        editarCompra(compra);

    }

    function calcularTotal(){

        precioUnitario.value = producto.value;

        total.value = cantidad.value * precioUnitario.value;
    }


})();