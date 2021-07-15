const url = 'http://localhost:40000/compras';

export const nuevaCompra = async compra => {

    try{
        await fetch(url,{
            method: 'POST',
            body: JSON.stringify ( compra ),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html';


    }catch (error){
        console.log(error);
    }
}

// Obtener Compras
export const obtnerCompra = async () => {

    try{
        const resultado = await fetch(url);
        const compras = await resultado.json();
        return compras;

    }catch (error){
        console.log(error);
    }
}

// Eliminar Compra
export const eliminarCompra = async id =>{

    try{
        await fetch(`${url}/${id}`,{
            method: 'DELETE'
        });

    }catch(error){
        console.log(error);
    }

}

// Obtiene un cliente
export const obtenerCompra = async id => {

    try{
        const resultado = await fetch(`${url}/${id}`);
        const compra = await resultado.json();

        return compra;

    }catch(error){
        console.log(error);
    }

}

// Actualiza registo
export const editarCompra = async compra => {

    try{
        await fetch(`${url}/${compra.id}`,{
            method: 'PUT',
            body: JSON.stringify ( compra ),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html';


    }catch (error){
        console.log(error);
    }
}