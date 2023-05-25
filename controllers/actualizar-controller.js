import { productosServicios } from "../services/productos-servicios.js";

const formulario = document.querySelector("#formulario");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");/*obtiene de la url el codigo*/

  if (id === null) {
    /*window.location.href = "/screens/error.html";*/
    console.log("No existe el codigo")
  }
  /*setear a las variables en esta parte nombre,precio,link,etc*/
  const inputvisuaimg = document.querySelector('#imgVisualizado');/**adicion */
  const inputNombre = document.querySelector('#nombre');
  const inputPrecio = document.querySelector('#precio');
  const inputURLImagen = document.querySelector('#imagen');
  const inputCategoria = document.querySelector('#categoria');
  console.log("nombre :",inputNombre,inputPrecio,inputURLImagen,inputCategoria,"id:",id);
  try {
    const perfil = await productosServicios.detalleProducto(id);
    if (perfil.nombre) {
      inputvisuaimg.src=perfil.imagen;/**adicion */
      inputNombre.value = perfil.nombre;
      inputPrecio.value = perfil.precio;
      inputURLImagen.value = perfil.imagen;
      inputCategoria.value = perfil.categoria;
    } else {
      throw new Error();
    }
  } catch (error) {
    /*window.location.href = "/screens/error.html";*/
    console.log("No existe el codigo");
  }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");/*obtiene la id por link */

  const Nombre = document.querySelector('#nombre').value;
  const Precio = document.querySelector('#precio').value;
  const Imagen = document.querySelector('#imagen').value;
  const Categoria = document.querySelector('#categoria').value;
  productosServicios.actualizaProducto(id,Nombre, Precio, Imagen,Categoria,).then(() => {
    window.location.href = "/todoProductos.html";/*podria ser sustituido por cualquier mensaje */
  });
});
