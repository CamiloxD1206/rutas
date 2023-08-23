import {motos,datosBusqueda,max,min,resultado} from '../modulos/modulos.js'
//-------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded',()=>{
    // mostrarmotos();
})
//------------------------------------------------------------
function mostrarmotos(motos){
    motos.forEach((element) => {
        const motoHTML=document.createElement('p');
        motoHTML.innerHTML=`<p>${element.linea}</p>`
    });

}
