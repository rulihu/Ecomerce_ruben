import { productosServicios } from "../services/productos-servicios.js";

const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const btnLogin = document.querySelector('#iniciar-sesion');

/*console.log("coreo",inputEmail.value);*/


async function usuarioExiste() {

    let existeUsuario;
    const spinner = document.querySelector('#spinner');

    await productosServicios.listaUsuarios()
        .then(respuesta => {
            respuesta.forEach(usuario => {

                if (usuario.correo === inputEmail.value && usuario.password === inputPassword.value) {
                    return existeUsuario = true;
                } else {
                    return;
                }
            });
        })
        .catch(error => console.log(error));

    if (!existeUsuario) {
        /*mostrarMensaje('Email o contraseña incorrecto, intenta nuevamente', 'error');*/
        console.log('Email o contraseña incorrecto, intenta nuevamente');
        window.location.href = "/registroFallido.html";
    } else {
        /*window.location.href = "/todoProductos.html";*/
        console.log('ingreso correctamente');
        window.location.href = "/registroExitoso.html";
        /*mostrarMensaje('Iniciando sesión. Redireccionando a página de inicio', 'succes');
        spinner.classList.add('spinner');
        usuarioAutenticado(true)
        setTimeout(() => {
            spinner.classList.remove('spinner');
            window.location.href = "/AluraShop/productos.html";
        }, 5000);*/
    }
}

btnLogin.addEventListener('click', usuarioExiste);
/*btnLogin.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	alert("Le has dado click");
});*/