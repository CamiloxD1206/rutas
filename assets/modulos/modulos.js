//base de datos (motos)
export const rutas = [{
        id: 1,
        nombre: "Ruta del Café Quindiano",
        Kilometros: 230,
        estado: "Realizada",
        calificacion: 4,
        tipoVia: "Asfalto"
    },
    {
        id: 2,
        nombre: "Senda de la Sierra Nevada",
        Kilometros: 23,
        estado: "Pendiente",
        calificacion: 3,
        tipoVia: "Trocha"
    },
    {
        id: 3,
        nombre: "Camino de los Tayrona",
        Kilometros: 23,
        estado: "Realizada",
        calificacion: 5,
        tipoVia: "Asfalto"
    },
    {
        id: 4,
        nombre: "Ruta de los Llanos Verdes",
        Kilometros: 42,
        estado: "Pendiente",
        calificacion: 2,
        tipoVia: "Asfalto"
    },
    {
        id: 5,
        nombre: "Vía de la Guajira Salvaje",
        Kilometros: 50,
        estado: "Realizada",
        calificacion: 4,
        tipoVia: "Trocha"
    },
    {
        id: 6,
        nombre: "Ruta de los Cañones del Chicamocha",
        Kilometros: 28,
        estado: "Realizada",
        calificacion: 5,
        tipoVia: "Asfalto"
    },
    {
        id: 7,
        nombre: "Senda de los Volcanes del Ruiz",
        Kilometros: 340,
        estado: "Pendiente",
        calificacion: 3,
        tipoVia: "Trocha"
    },
    {
        id: 8,
        nombre: "Ruta del Amazonas",
        Kilometros: 45,
        estado: "Pendiente",
        calificacion: 2,
        tipoVia: "Trocha"
    },
    {
        id: 9,
        nombre: "Trayecto de los Nevados",
        Kilometros: 60,
        estado: "Realizada",
        calificacion: 4,
        tipoVia: "Asfalto"
    },
    {
        id: 10,
        nombre: "Ruta del Cacao y Oro",
        Kilometros: 22,
        estado: "Realizada",
        calificacion: 5,
        tipoVia: "Trocha"
    },
    // ... y aquí empiezan las siguientes 5 rutas
    {
        id: 11,
        nombre: "Sendero de las Cataratas",
        Kilometros: 100,
        estado: "Pendiente",
        calificacion: 4,
        tipoVia: "Trocha"
    },
    {
        id: 12,
        nombre: "Ruta del Valle Verde",
        Kilometros: 350,
        estado: "Realizada",
        calificacion: 3,
        tipoVia: "Asfalto"
    },
    {
        id: 13,
        nombre: "Senda de los Páramos Andinos",
        Kilometros: 40,
        estado: "Realizada",
        calificacion: 2,
        tipoVia: "Trocha"
    },
    {
        id: 14,
        nombre: "Ruta de los Ríos Transparentes",
        Kilometros: 200,
        estado: "Pendiente",
        calificacion: 5,
        tipoVia: "Asfalto"
    },
    {
        id: 15,
        nombre: "Vía del Pájaro Quetzal",
        Kilometros: 500,
        estado: "Realizada",
        calificacion: 4,
        tipoVia: "Trocha"
    }
];
//variables---------------
export const divMostrar = document.querySelector('#mostrar');
export const rutaHTML = document.createElement('p');


//objeto de busqueda-------------------------------
export const datosBusqueda = [];