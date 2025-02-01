import axios from 'axios';
import { element, icon, td } from '../src/util/documentUtil.js';
import { notifySuccess } from '../src/util/warningUtil.js';


window.readProfesor = function() {
    axios.get('http://localhost:8080/profesores')
        .then((response) => {
            const profesorList = response.data;
            const profesorTable = element('tableBody');

            profesorList.forEach(profesor => {
                const row =  document.createElement('tr');
                row.id = 'profesor-' + profesor.id_profesor;
                row.innerHTML = td(profesor.nombre) + 
                                td(profesor.email) + 
                                td (profesor.rama_conocimiento) + 
                                '<a class="btn btn-info" href="modify-profesor.html?id='+ profesor.id_profesor + '">' +
                                icon('edit') +
                                '</a> ' +  '<a class="btn btn-danger" href="javascript:removeProfesor('+ profesor.id_profesor + ')">' + 
                                icon('delete') +
                                '</a>';
                profesorTable.appendChild(row);
            })
        });
};

window.removeProfesor = function(id) {
    if(confirm('Are you sure you want to delete this teacher?')){
    axios.delete('http://localhost:8080/profesores/' + id)
        .then((response) => {
            if (response.status == 204){
                notifySuccess('Teacher deleted successfully');
                element('profesor-' + id).remove();
            }
        });
    }
};