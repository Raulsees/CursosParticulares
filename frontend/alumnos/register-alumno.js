import axios from 'axios';
import {notifyError, notifySuccess} from'../src/util/warningUtil.js';
import { element } from '../src/util/documentUtil.js';


window.addAlumno = function() {
   const nombre = element('nombre').value;
   const email = element('email').value;
   const dni = element('dni').value;

   //validación de datos
    if (nombre == '' || email == '' || dni =='') {
        notifyError('All fields must be filled.');
        return;
    }
    
   axios.post('http://localhost:8080/alumnos',{
        nombre: nombre,
        email: email,
        dni: dni
   });

   //confirmar al usuario que todo ha ido bien
   notifySuccess('Student registered successfully');
        

   //vaciar el formulario
   element('nombre').value = '';
   element('email').value = '';
   element('dni').value = '';

};