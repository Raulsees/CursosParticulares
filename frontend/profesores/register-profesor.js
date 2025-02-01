import axios from 'axios';
import {notifyError, notifySuccess} from'../src/util/warningUtil.js';
import { element } from '../src/util/documentUtil.js';


window.addProfesor = function() {
   const nombre = element('nombre').value;
   const email = element('email').value;
   const rama_conocimiento = element('rama_conocimiento').value;

   if(!nombre || !email || !rama_conocimiento){
    notifyError('All fields must be filled.');
    return;
}

       
  

   axios.post('http://localhost:8080/profesores',{
        nombre: nombre,
        email: email,
        rama_conocimiento: rama_conocimiento
   });

   //confirmar al usuario que todo ha ido bien
   notifySuccess('Teacher registered successfully');
        

   //vaciar el formulario
   element('nombre').value = '';
   element('email').value = '';
   element('rama_conocimiento').value = '';

};