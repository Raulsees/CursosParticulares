import axios from 'axios';
import { element, icon, td } from '../util/documentUtil.js';
import { notifySuccess } from '../util/warningUtil.js';


window.readCursos = function() {
    axios.get('http://localhost:8080/cursos')
        .then((response) => {
            const cursoList = response.data;
            const cursoTable = element('tableBody');

            cursoList.forEach(curso => {
                const row =  document.createElement('tr');
                row.id = 'curso-' + curso.id_curso;
                row.innerHTML = td(curso.nombre) + 
                                td(curso.duracion) + 
                                td (curso.precio) + 
                                td (curso.id_centro) + 
                                '<a class="btn btn-info" href="../../cursos/modify-curso.html?id='+ curso.id_curso + '">' +
                                icon('edit') +
                                '</a> ' +  '<a class="btn btn-danger" href="javascript:removeCurso('+ curso.id_curso + ')">' + 
                                icon('delete') +
                                '</a>';
                cursoTable.appendChild(row);
            })
        });
};

window.removeCurso = function(id) {
    if(confirm('Are you sure you want to delete this course?')){
    axios.delete('http://localhost:8080/cursos/' + id)
        .then((response) => {
            if (response.status == 204){
                notifySuccess('Course deleted successfully.');
                element('curso-' + id).remove();
            }
        });
    }
};