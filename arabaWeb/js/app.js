
let carrusel = document.querySelector('.contenedorTarjetas');
let botonI = document.getElementById('izquierda');
let botonD = document.getElementById('derecha');

botonD.addEventListener('click', () =>{
    carrusel.scrollLeft += carrusel.offsetWidth;
})

botonI.addEventListener('click', () =>{
    carrusel.scrollLeft -= carrusel.offsetWidth;
})
