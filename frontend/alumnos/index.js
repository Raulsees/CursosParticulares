import axios from 'axios';
import { element, icon, td } from '../src/util/documentUtil.js';
import { notifySuccess } from '../src/util/warningUtil.js';


window.readAlumno = function() {
    axios.get('http://localhost:8080/alumnos')
        .then((response) => {
            const alumnoList = response.data;
            const alumnoTable = element('tableBody');

            alumnoList.forEach(alumno => {
                const row =  document.createElement('tr');
                row.id = 'alumno-' + alumno.id_alumno;
                row.innerHTML = td(alumno.nombre) + 
                                td(alumno.email) + 
                                td (alumno.dni) + 
                                '<a class="btn btn-info" href="modify-alumno.html?id='+ alumno.id_alumno + '">' +
                                icon('edit') +
                                '</a> ' +  '<a class="btn btn-danger" href="javascript:removeAlumno('+ alumno.id_alumno + ')">' + 
                                icon('delete') +
                                '</a>';
                alumnoTable.appendChild(row);
            })
        });
};

window.removeAlumno = function(id) {
    if(confirm('Are you sure you want to delete this student?')){
    axios.delete('http://localhost:8080/alumnos/' + id)
        .then((response) => {
            if (response.status == 204){
                notifySuccess('Student erased succesfully.');
                element('alumno-' + id).remove();
            }
        });
    }
};