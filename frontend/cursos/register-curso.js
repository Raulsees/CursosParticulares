import axios from 'axios';
import {notifyError, notifySuccess} from'../src/util/warningUtil.js';
import { element } from '../src/util/documentUtil.js';


window.addCurso = function() {
   const nombre = element('nombre').value;
   const duracion = element('duracion').value;
   const precio = element('precio').value;
   const id_centro = element('id_centro').value;

   //validación de datos
    if (nombre == '') {
        notifyError('Name is an obligatory field');
        return;
    }
    
    if(!duracion || isNaN(duracion)){
        notifyError('Introduce numbers, please.');
        return;
    }
   
    if(!precio || isNaN(precio)){
        notifyError('Introduce numbers, please.');
        return;
    }

    if(!id_centro || isNaN(id_centro)){
        notifyError('Introduce numbers, please.');
        return;
    }

   axios.post('http://localhost:8080/cursos',{
        nombre: nombre,
        duracion: duracion,
        precio: precio,
        id_centro: id_centro
   });

   //confirmar al usuario que todo ha ido bien
   notifySuccess('Curso registrado correctamente.');
        

   //vaciar el formulario
   element('nombre').value = '';
   element('duracion').value = '';
   element('precio').value = '';
   element('id_centro').value = '';

};