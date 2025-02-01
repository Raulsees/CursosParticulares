import axios from 'axios';
import { element } from '../src/util/documentUtil.js';
import { notifySuccess, notifyError } from '../src/util/warningUtil.js';



window.showAlumno = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id')); 

    axios.get('http://localhost:8080/alumnos/' + id)
        .then((response) => {
            const alumno = response.data;

            // Configurar los placeholders de los campos
            document.getElementById('nombre').placeholder = alumno.nombre;
            document.getElementById('email').placeholder = alumno.email;
            document.getElementById('dni').placeholder = alumno.dni;
        })
        .catch((error) => {
            console.error('Error obtainig student´s details', error);
        });
};


window.saveChanges = function(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id')); 

    const nombre = element('nombre').value
    const email = element('email').value
    const dni = element('dni').value

if(!nombre || !email || !dni){
    notifyError('All fields must be filled.');
    return;
}
    
axios.put('http://localhost:8080/alumnos/' + id, {
    nombre: nombre,
    email: email,
    dni: dni
})

.then(response => {
    console.log('Server answer:', response);  // Verifica la respuesta
if (response.status === 204) {
    notifySuccess('Student modified successfully.');
    }
})

};


