//base de datos (motos)
export const rutas = [
    {
      id: 1,
      nombre: "Ruta del Café Quindiano",
      minKilometros: 25,
      maxKilometros: 500,
      estado: "Realizada",
      calificacion: 4,
      tipoVia: "Asfalto"
    },
    {
      id: 2,
      nombre: "Senda de la Sierra Nevada",
      minKilometros: 30,
      maxKilometros: 800,
      estado: "Pendiente",
      calificacion: 3,
      tipoVia: "Trocha"
    },
    {
      id: 3,
      nombre: "Camino de los Tayrona",
      minKilometros: 40,
      maxKilometros: 1500,
      estado: "Realizada",
      calificacion: 5,
      tipoVia: "Asfalto"
    },
    {
      id: 4,
      nombre: "Ruta de los Llanos Verdes",
      minKilometros: 22,
      maxKilometros: 3000,
      estado: "Pendiente",
      calificacion: 2,
      tipoVia: "Asfalto"
    },
    {
      id: 5,
      nombre: "Vía de la Guajira Salvaje",
      minKilometros: 50,
      maxKilometros: 6000,
      estado: "Realizada",
      calificacion: 4,
      tipoVia: "Trocha"
    },
    // ... y aquí empiezan las 5 rutas adicionales
    {
      id: 6,
      nombre: "Ruta de los Cañones del Chicamocha",
      minKilometros: 28,
      maxKilometros: 400,
      estado: "Realizada",
      calificacion: 5,
      tipoVia: "Asfalto"
    },
    {
      id: 7,
      nombre: "Senda de los Volcanes del Ruiz",
      minKilometros: 35,
      maxKilometros: 1200,
      estado: "Pendiente",
      calificacion: 3,
      tipoVia: "Trocha"
    },
    {
      id: 8,
      nombre: "Ruta del Amazonas",
      minKilometros: 45,
      maxKilometros: 7500,
      estado: "Pendiente",
      calificacion: 2,
      tipoVia: "Trocha"
    },
    {
      id: 9,
      nombre: "Trayecto de los Nevados",
      minKilometros: 60,
      maxKilometros: 9000,
      estado: "Realizada",
      calificacion: 4,
      tipoVia: "Asfalto"
    },
    {
      id: 10,
      nombre: "Ruta del Cacao y Oro",
      minKilometros: 22,
      maxKilometros: 2000,
      estado: "Realizada",
      calificacion: 5,
      tipoVia: "Trocha"
    },
    // ... y aquí empiezan las siguientes 5 rutas
    {
      id: 11,
      nombre: "Sendero de las Cataratas",
      minKilometros: 28,
      maxKilometros: 1500,
      estado: "Pendiente",
      calificacion: 4,
      tipoVia: "Trocha"
    },
    {
      id: 12,
      nombre: "Ruta del Valle Verde",
      minKilometros: 35,
      maxKilometros: 2500,
      estado: "Realizada",
      calificacion: 3,
      tipoVia: "Asfalto"
    },
    {
      id: 13,
      nombre: "Senda de los Páramos Andinos",
      minKilometros: 40,
      maxKilometros: 1800,
      estado: "Realizada",
      calificacion: 2,
      tipoVia: "Trocha"
    },
    {
      id: 14,
      nombre: "Ruta de los Ríos Transparentes",
      minKilometros: 22,
      maxKilometros: 3000,
      estado: "Pendiente",
      calificacion: 5,
      tipoVia: "Asfalto"
    },
    {
      id: 15,
      nombre: "Vía del Pájaro Quetzal",
      minKilometros: 50,
      maxKilometros: 5000,
      estado: "Realizada",
      calificacion: 4,
      tipoVia: "Trocha"
    }
  ];
//variables---------------
export const divMostrar = document.querySelector('#mostrar');
export let input=document.createElement('option');
export const select1=document.querySelector('#select1');
export const select6=document.querySelector('#select6');
export const select3=document.querySelector('#select3');
export const select2=document.querySelector('#select2');

//--------------------------



select1.addEventListener('change',(rutaSeleccionada)=>{
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
});
