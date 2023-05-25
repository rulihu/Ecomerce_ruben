import { productosServicios } from "../services/productos-servicios.js";

const contenedorProductos = document.querySelector('.productos');

function mostrarTodo(id, nombre, precio, imagen, categoria, link) {
    const div = document.createElement('div');
    div.classList.add('producto');
    const contenido = `
        <div class="imgEdicion">
            <button type="button" id="${id}"><span class="icon-trash"></span></button>
            <button onclick="window.location.href='/editProducto.html?id=${id}';"><span class="icon-pencil"></span></button>
        </div>
        <img class="producto_img" src="${imagen}" alt="producto star wars">
        <p class="producto_nombre">${nombre}</p>
        <p class="producto_precio">$${precio}</p>
        <a href="${link}?id=${id}" type="button" class="producto_enlace" data-verproducto>Ver producto</a>
        `;
    div.innerHTML = contenido;
    const btn = div.querySelector("button");
    btn.addEventListener("click", () => {
      const id = btn.id;
      productosServicios
        .eliminarProducto(id)
        .then((respuesta) => {
          console.log(respuesta);
        })
        .catch((err) => alert("Ocurrió un error"));
    });
    return div;
}

productosServicios.listaProductos()
    .then(resultado => {
        resultado.forEach(({id, nombre, precio, imagen, categoria, link}) => {
            const verTodo = mostrarTodo(id, nombre, precio, imagen, categoria, link);
            contenedorProductos.appendChild(verTodo);
        });
    })
    .catch(error => console.log(error));
