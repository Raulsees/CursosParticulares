import axios from 'axios';
import { element } from '../src/util/documentUtil.js';
import { notifySuccess, notifyError } from '../src/util/warningUtil.js';



window.showProfesor = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id')); 

    axios.get('http://localhost:8080/profesores/' + id)
        .then((response) => {
            const profesor = response.data;

            // Configurar los placeholders de los campos
            document.getElementById('nombre').placeholder = profesor.nombre;
            document.getElementById('email').placeholder = profesor.email;
            document.getElementById('rama_conocimiento').placeholder = profesor.rama_conocimiento;
            
        })
        .catch((error) => {
            console.error('Error obtaining details of teacher', error);
        });
};


window.saveChanges = function(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id')); 

    const nombre = element('nombre').value
    const email = element('email').value
    const rama_conocimiento = element('rama_conocimiento').value

if(!nombre || !email || !rama_conocimiento){
    notifyError('All fields must be filled.');
    return;
}
    
axios.put('http://localhost:8080/profesores/' + id, {
    nombre: nombre,
    email: email,
    rama_conocimiento: rama_conocimiento,
})

.then(response => {
    console.log('Respuesta del servidor:', response);  // Verifica la respuesta
if (response.status === 204) {
    notifySuccess('Profesor modificado satisfactoriamente.');
    }
})

};


