import { obtnerCompra, eliminarCompra } from './API.js'

(function() {

    const listado = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', mostrarCompras);

    listado.addEventListener('click', confirmarEliminar);

    async function mostrarCompras() {

        const compras = await obtnerCompra();

        compras.forEach(compra => {

            const { nombreProducto, precioUnitario, cantidad, total, id } = compra;

            const row = document.createElement('tr');

            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombreProducto} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${precioUnitario}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${cantidad}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${total}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;

            listado.appendChild(row);


        })
        


    }

    function confirmarEliminar(e) {

        if(e.target.classList.contains('eliminar')){
            const compraId = parseInt(e.target.dataset.cliente);

            const confirmar = confirm(' ¿ Desea eliminar la compra ?');

            if(confirmar){
                eliminarCompra(compraId);
            }
        }

    }



})();