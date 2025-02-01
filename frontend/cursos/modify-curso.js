import axios from 'axios';
import { element } from '../src/util/documentUtil.js';
import { notifySuccess, notifyError } from '../src/util/warningUtil.js';



window.showCursos = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id')); 

    axios.get('http://localhost:8080/cursos/' + id)
        .then((response) => {
            const curso = response.data;

            // Configurar los placeholders de los campos
            document.getElementById('nombre').placeholder = curso.nombre;
            document.getElementById('duracion').placeholder = curso.duracion;
            document.getElementById('precio').placeholder = curso.precio;
            document.getElementById('id_centro').placeholder = curso.id_centro;
        })
        .catch((error) => {
            console.error('Error obtaining course´s details.', error);
        });
};


window.saveChanges = function(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id')); 

    const nombre = element('nombre').value
    const duracion = element('duracion').value
    const precio = element('precio').value
    const id_centro = element('id_centro').value

if(!nombre || !duracion || !precio || !id_centro){
    notifyError('All fields must be filled.');
    return;
}
    
axios.put('http://localhost:8080/cursos/' + id, {
    nombre: nombre,
    duracion: duracion,
    precio: precio,
    id_centro: id_centro
})

.then(response => {
    console.log('Server answer:', response);  // Verifica la respuesta
if (response.status === 204) {
    notifySuccess('Course modified successfully.');
    }
})

};


