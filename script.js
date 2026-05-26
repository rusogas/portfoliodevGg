
function mostrarMensaje(){ // Función que muestra un mensaje emergente
    alert("Este proyecto fue realizado con Flask y MySQL"); // Muestra una alerta en pantalla
}

const botonTema = document.getElementById("tema-btn");// Guarda el botón de cambio de tema en una variable

function cambiarTema(){ // Función para cambiar entre modo claro y oscuro

    document.body.classList.toggle("oscuro");

    if(document.body.classList.contains("oscuro")){

        botonTema.textContent = " ☀️ ";

    }else{

        botonTema.textContent = " 🌙 ";

    }

}

document.getElementById("cv").addEventListener("click", () => { // Evento para abrir el CV al hacer click
    window.open("cv.pdf"); // Abre el archivo cv.pdf en otra pestaña
});

const btnArriba = document.getElementById("btnArriba"); // Guarda el botón de volver arriba

window.addEventListener("scroll", () => { // Evento que detecta el scroll de la página

    if(window.scrollY > 300){ // Evento que detecta el scroll de la página
        btnArriba.classList.add("mostrar"); // Muestra el botón agregando la clase "mostrar"
    }else{
        btnArriba.classList.remove("mostrar"); // Oculta el botón quitando la clase "mostrar"
    }

});

window.addEventListener("load", () => { // Evento que se ejecuta cuando la página ha cargado completamente

    setTimeout(() => {
 
        const loader = document.getElementById("loader"); // Guarda el elemento del loader en una variable

        loader.style.opacity = "0";       

        // La imagen empieza ANTES de ocultar el loader
        document.querySelector(".foto-dev") // Selecciona el elemento con la clase "foto-dev"
        .classList.add("animar-foto");    // Agrega la clase "animar-foto" para iniciar la animación de la foto
 
        setTimeout(() => { // Espera un tiempo para ocultar el loader después de la animación

            loader.style.display = "none"; // Oculta el loader después de la animación

        }, 500);

    }, 1500);

});