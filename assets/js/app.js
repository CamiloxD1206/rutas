import { rutas, divMostrar } from '../modulos/modulos.js';

function mostrarRuta(nombre) {
    const rutaSeleccionada = rutas.find(ruta => ruta.nombre === nombre);

    divMostrar.innerHTML = '';

    if (rutaSeleccionada) {
        const rutaHTML = document.createElement('p');
        rutaHTML.textContent = `Nombre: ${rutaSeleccionada.nombre}
                                Kilometros:${rutaSeleccionada.Kilometros}
                                Estado: ${rutaSeleccionada.estado}
                                Calificación: ${rutaSeleccionada.calificacion}
                                Tipo de Via: ${rutaSeleccionada.tipoVia}`;
        divMostrar.appendChild(rutaHTML);
    } else {
        const mensaje = document.createElement('p');
        mensaje.textContent = "Ruta no encontrada.";
        divMostrar.appendChild(mensaje);
    }
}

document.querySelector('#select1').addEventListener('change', function() {
    const nombreRuta = this.value;
    mostrarRuta(nombreRuta);
});