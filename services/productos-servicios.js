//const url = "http://localhost:3000/productos"
const url = "https://my-json-server.typicode.com/rulihu/Api_Ecomerse/productos"
/*Es para la parte de solo usuarios*/
//const url2 = "http://localhost:3000/usuarios"
const url2 = "https://my-json-server.typicode.com/rulihu/Api_Ecomerse/usuarios"

async function listaUsuarios(){
    return await fetch(url2).then(respuesta => respuesta.json());
}

async function listaProductos(){
    return await fetch(url).then(respuesta => respuesta.json());
}

async function crearProducto(nombre, precio, imagen, categoria, link) {
    await fetch(url, {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({id: uuid.v4(),nombre,precio,imagen,categoria,link})
    })
}

const eliminarProducto = (id) => {
    //return fetch(`http://localhost:3000/productos/${id}`, {
    return fetch(url+`/${id}`, {
      method: "DELETE",
    });
  };

const detalleProducto = (id) => {
    //return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) =>
    return fetch(url+`/${id}`).then((respuesta) =>
        respuesta.json()
    );
};

const actualizaProducto = (id,nombre,precio,imagen,categoria,link) => {
    //return fetch(`http://localhost:3000/productos/${id}`,{
    return fetch(url+`/${id}`,{
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id,nombre,precio,imagen,categoria,link}),
    })
        .then((respuesta) => respuesta)
        .catch((err) => console.log(err));
};

export const productosServicios = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizaProducto,
    listaUsuarios
}