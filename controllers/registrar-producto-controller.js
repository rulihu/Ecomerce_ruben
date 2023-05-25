import { productosServicios } from "../services/productos-servicios.js";

/*VALOR DE FORMULARIO*/
const formulario = document.querySelector("#formulario");
const inputNombre = document.querySelector('#nombre');
const inputPrecio = document.querySelector('#precio');
const inputURLImagen = document.querySelector('#imagen');
const inputCategoria = document.querySelector('#categoria');

const btnRegistarProducto = document.querySelector('#registrar-producto-btn');

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    /*const id = 20;*/
    const nombre=inputNombre.value;
    const precio=inputPrecio.value;
    const imagen=inputURLImagen.value;
    const categoria=inputCategoria.value;
    const link="./vista-producto.html";
    productosServicios
      .crearProducto(nombre,precio,imagen,categoria,link)
      .then(() => {
        window.location.href = "/registroExitoso.html";
      })
      .catch((err) => console.log(err));
  });
