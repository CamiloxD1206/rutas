import {rutas,select1, select2, select3} from '../modulos/modulos.js';

for (let i = 0; i < rutas.length;i++) {
    const opcion=document.createElement('option');
    opcion.innerHTML=rutas[i].nombre;
    select1.appendChild(opcion);
       
   }
   for (let i = 0; i < rutas.length;i++) {
    const opcion=document.createElement('option');
    opcion.innerHTML=rutas[i].maxKilometros;
    select3.appendChild(opcion);
       
   }

   for (let i = 0; i < rutas.length;i++) {
    const opcion=document.createElement('option');
    opcion.innerHTML=rutas[i].minKilometros;
    select2.appendChild(opcion);
       
   }

   
   
 