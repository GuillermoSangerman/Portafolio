import { misProyectos } from "./data.js";

const cards = document.querySelector('#cards') 
const botonProyectos = document.querySelector('.boton_proyectos')
const botonInicio = document.querySelector('.boton_inicio')
const fondoApp = document.querySelector('.fondo_app')
const contenedorProyectos = document.querySelector('.contenedor_proyectos')
const imgFondo = document.querySelector('.img_fondo')
const botonContacto = document.querySelector('.boton_contacto')
const cardPresent = document.querySelector('.card_present')
function proyectos() {
    contenedorProyectos.classList.remove('d-none')
    fondoApp.classList.remove('d-none')
    imgFondo.classList.add('d-none')
    cardPresent.classList.add('d-none')

    cards.innerHTML = ""
    misProyectos.forEach(element => {
        console.log(misProyectos);
        const todosLosProyectos = `<div class="col">
                  <div class="card card_proyect h-100 border border-5">
                    <img src="${element.img}" class="img-fluid h-100 mb-4" alt="${element.nombre}">
                    <div class="card-body">
                      <h5 class="card-title">${element.nombre}</h5>
                      <p class="card-text">${element.contenido}.</p>
                    </div>
                    <div class="d-flex justify-content-end m-4">
                    <a href="${element.url}">
                    <button class="rounded-circle link_button" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40px" viewBox="0 0 24 24" fill="currentColor" class="size-6" >
                            <path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    </a>
                    </div>
                  </div>
                </div>`
    cards.innerHTML += todosLosProyectos
    });
}

botonProyectos.addEventListener('click', proyectos)
botonInicio.addEventListener('click', ()=>{
  contenedorProyectos.classList.add('d-none')
  fondoApp.classList.add('d-none')
  imgFondo.classList.remove('d-none')
})
botonContacto.addEventListener('click', () =>{
  cardPresent.classList.remove('d-none')
  contenedorProyectos.classList.add('d-none')
  fondoApp.classList.remove('d-none')
  imgFondo.classList.add('d-none')

})