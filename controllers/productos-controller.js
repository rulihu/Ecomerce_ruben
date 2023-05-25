import {productosServicios} from "../services/productos-servicios.js";

const contenedorStar = document.querySelector('#star-wars');
const contenedorConsolas = document.querySelector('#consolas');
const contenedorDiversos = document.querySelector('#diversos');
console.log("es el primero -- ",contenedorStar)

function nuevoProducto(id, nombre, precio, imagen, categoria, link) {
    const div = document.createElement('div');
    div.classList.add('main_container_1_container_box');
    const contenido = `
        <div>
            <img src="${imagen}" alt="">
            <p class="descri">${nombre}</p>
            <p class="precio">${precio}</p>
            <a href="${link}?id=${id}" type="button" class="producto_enlace" data-verproducto>Ver producto</a>
        </div>`;
    div.innerHTML = contenido;
    return div;
}

productosServicios.listaProductos()/*es para la parte de index*/
    .then(async respuesta => {
        try {
            await respuesta.forEach(({ id, nombre, precio, imagen, categoria, link }) => {
                const nuevaLinea = nuevoProducto(id, nombre, precio, imagen, categoria, link);
                switch (categoria) {
                    case 'star':
                        contenedorStar.appendChild(nuevaLinea);
                        break;

                    case 'consolas':
                        contenedorConsolas.appendChild(nuevaLinea);
                        break;

                    case 'diversos':
                        contenedorDiversos.appendChild(nuevaLinea);

                    default:
                        categoria = '';
                        break;
                }
            })
        } catch (error) {
            console.log(error)
        }
    })