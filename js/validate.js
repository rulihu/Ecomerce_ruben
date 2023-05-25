document.getElementById('subir-img').onchange = function(e) {
    let reader= new FileReader();/*almacen archivos*/
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function() {
        let preview = document.getElementById('preview');/*obtiene etiqueta previsualizacio */
        imagen = document.createElement('img');
        imagen.src = reader.result;
        imagen.style.width = "200px"
        preview.append(imagen);
    }
}
/*para la parte de direccionamiento de carpetas de imagenes*/
const categori = document.querySelector("#categoria");

categori.addEventListener('change',()=>{
    const resultado = categori.value;
    console.log(resultado);
    /*console.log(event.target.value);*/
    let nameimg = document.querySelector("#subir-img");
    if (resultado=="star"){
        const imgruta = document.querySelector("#imagen");
        console.log(imgruta.value="./images/prod_starwars/"+nameimg.files[0].name);
    }
    if (resultado=="consolas"){
        const imgruta = document.querySelector("#imagen");
        console.log(imgruta.value="./images/prod_consolas/"+nameimg.files[0].name);
    }
    if (resultado=="diversos"){
        const imgruta = document.querySelector("#imagen");
        console.log(imgruta.value="./images/prod_diversos/"+nameimg.files[0].name);
    }
});


/*let categori = document.querySelector("#categoria");
console.log('catgoria::: ',categori);*/
