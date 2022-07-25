// querySelector
const heading = document.querySelector('#heading');
heading.textContent = 'Nuevo Heading';
console.log(heading);



// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);

enlaces[0].textContent = 'Google';
enlaces[0].classList.add('nueva-clase');
enlaces[0].href = 'https://www.google.com/'


// Generar un nuevo enlace
const nuevoEnlace = document.createElement('a');

// Agregar al href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Tienda virtual';

// Agregar la clase 
nuevoEnlace.classList.add('navegacion__enlace');

// Agregar al documento 
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace)

// Eventos

// console.log(1);

// window.addEventListener('load', function(){ //load espera a que el js y los archivos que dependen del HTML esten listos
//     console.log(2);
// });

// window.onload = function(){
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function(){ // Solo espera por el HTML, pero no espera a que cargue el css o img
//     console.log(4);
// });

// console.log(5);

// window.onscroll = function(){
//     console.log('Scrolling...')
// }


// Seleccionar elementos y asociarles un evento

const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    evento.preventDefault();
    console.log('enviando formulario...');
});

// Eventos de los Inputs y TextArea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {

    datos[e.target.id] = e.target.value;
    console.log(datos)
}
