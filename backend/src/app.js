//Se cargan las librerias
const express = require('express');
const cors = require('cors');
const knex = require('knex');

//Iniciamos la aplicación (Backend)
const app = express();
app.use(cors());
app.use(express.json());

//Iniciar la BBDD
const db = knex ({
    client: 'sqlite3',
    connection: {
        filename: 'formateca.db'                    
    },
    useNullAsDefault: true
});

//mostrar cursos
app.get('/cursos', async(req, res) => {
    const formateca = await db('cursos').select('*');
    res.status(200).json(formateca);
});

app.get('/cursos/:id_curso', async(req, res) => {
    const formateca = await db('cursos').select('*').where({ id_curso: req.params.id_curso }).first();
    res.status(200).json(formateca); // ---> Se da el OK de la conexión a la BBDD
});

//añadir nuevo curso
app.post('/cursos', async (req, res) => {
    await db('cursos').insert({
        nombre: req.body.nombre,
        duracion:  req.body.duracion, // ---> todo esto mete los datos en la BBDD
        precio:  req.body.precio,
        id_centro: req.body.id_centro
    });

    res.status(201).json({}); // ---> Aquí damos el OK al registrar el nuevo juego. No devuelve nada
});


app.get('/centros/:id_centro', async(req, res) => {
    const formateca = await db('centros').select('*').where({ id_centro: req.params.id_centro }).first();
    res.status(200).json(formateca);
});

//Mostrar alumnos
app.get('/alumnos', async(req, res) => {
    const formateca = await db('alumnos').select('*');
    res.status(200).json(formateca);
});

app.get('/alumnos/:id_alumno', async(req, res) => {
    const formateca = await db('alumnos').select('*').where({ id_alumno: req.params.id_alumno }).first();
    res.status(200).json(formateca); // ---> Se da el OK de la conexión a la BBDD
});

//añadir nuevo alumno
app.post('/alumnos', async (req, res) => {
    await db('alumnos').insert({
        nombre: req.body.nombre,
        email:  req.body.email, // ---> todo esto mete los datos en la BBDD
        dni:  req.body.dni
    });

    res.status(201).json({}); // ---> Aquí damos el OK al registrar el nuevo juego. No devuelve nada
});



//mostrar profesores
app.get('/profesores', async(req, res) => {
    const formateca = await db('profesores').select('*');
    res.status(200).json(formateca);
});

app.get('/profesores/:id_profesor', async(req, res) => {
    const formateca = await db('profesores').select('*').where({ id_profesor: req.params.id_profesor }).first();
    res.status(200).json(formateca); // ---> Se da el OK de la conexión a la BBDD
});

//añadir profesores
app.post('/profesores', async (req, res) => {
    await db('profesores').insert({
        nombre: req.body.nombre,
        email:  req.body.email, // ---> todo esto mete los datos en la BBDD
        rama_conocimiento:  req.body.rama_conocimiento
    });

    res.status(201).json({}); // ---> Aquí damos el OK al registrar el nuevo juego. No devuelve nada
});



app.listen(8080, () => {
    console.log("El backend ha iniciado correctamente en el puerto 8080");
});

