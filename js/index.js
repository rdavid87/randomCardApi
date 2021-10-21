const tarjeta = document.querySelector(".tarjeta");
const btnRandom = document.querySelector("#random");

window.onload= function(){
    consultarApi();
}

btnRandom.addEventListener('click', function(){
    btnRandom.setAttribute("disabled","");
    consultarApi();
    btnRandom.removeAttribute("disabled");
});
// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
function consultarApi(){
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            //manipulamos la respuesta
            let misDatos = seleccionaDatos(data.results[0]);
            renderizarDatosUsuario(misDatos);
        });

}


function renderizarDatosUsuario(datos) {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.

    
    tarjeta.innerHTML=`<div class="card">
    <img src="${datos.foto}" alt="${datos.nombreCompleto}" style="width:100%">
    <h1>${datos.nombreCompleto}</h1>
    <p class="title">${datos.email}</p>
    <p>Harvard University</p>
    <div style="margin: 24px 0;">
        <a href="#"><i class="fa fa-dribbble"></i></a> 
        <a href="#"><i class="fa fa-twitter"></i></a>  
        <a href="#"><i class="fa fa-linkedin"></i></a>  
        <a href="#"><i class="fa fa-facebook"></i></a> 
    </div>
    </div>`;
    
    
}


function seleccionaDatos(datos){
    let datosProcesados={
        "foto": datos.picture.large,
        "nombreCompleto": datos.name.title+" "+datos.name.first+" "+datos.name.last,
        "email": datos.email,
    }
    return datosProcesados;
}


/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.