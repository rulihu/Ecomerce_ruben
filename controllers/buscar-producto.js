import { productosServicios } from "../services/productos-servicios.js";
                                               
let campoBuscador = document.querySelector('#buscador');
const btnBuscar = document.querySelector('#buscar');
const mostrarResultado = document.querySelector('#resultado-busqueda');

/*btnBuscar.addEventListener('click',buscarProducto());*/
btnBuscar.addEventListener('click', () => {
    console.log("cadena a buscar: ",campoBuscador.value);
    buscarProducto();
});

async function buscarProducto() {
    console.log("se preciono el clic");
    limpiarHTML();

    let productos = [];
    const texto = campoBuscador.value.toLowerCase();

    if (texto != '') {

        try {
            await productosServicios.listaProductos()
                .then(respuesta => {
                    respuesta.forEach(producto => {
                        productos.push(producto);
                    });
                })

            for (let producto of productos) {
                let nombre = producto.nombre.toLowerCase();

                if (nombre.indexOf(texto) !== -1) {
                    const { id, nombre, precio, imagen, link } = producto;

                    const resultado = mostrarResultadoBusqueda(id, nombre, precio, imagen, link);

                    mostrarResultado.appendChild(resultado);
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    else{
        console.log("es vacio el texto a buscar");
    }
}


function mostrarResultadoBusqueda(id, nombre, precio, imagen, link) {
    console.log("procede a mostrar productos ");
    const div = document.createElement('div');
    div.classList.add('producto');

    const contenido = `
    <div>

        <img src="${imagen}">
        <p class="producto_nombre" name="yoda">${nombre}</p>
        <p class="producto_precio">$${precio}</p>

        <a href="${link}?id=${id}" type="button" class="producto_enlace" data-verproducto>Ver producto</a>
  
    </div>
    `;

    div.innerHTML = contenido;

    return div;
}

function limpiarHTML() {

    if (mostrarResultado.firstChild) {
        mostrarResultado.removeChild(mostrarResultado.firstChild);
    }
}