
const express = require('express');
const router = express.Router();
let tareas = require('./tareas.json');

// Ruta para crear una tarea
router.post('/', (req, res) => {
    const tareaNueva = req.body;
    tareas.push(tareaNueva);
    console.log('****', tareaNueva);
    res.status(200).send({
        mensaje: 'tarea agregada correctamente'
    });
});

// Ruta para eliminar una tarea
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    tareas = tareas.filter(tarea => tarea.id != id);
    res.status(200).send(tareas);
});

// Ruta para actualizar una tarea
router.put('/:id', (req, res) => {
    const tareaModificar = req.body;
    const id = req.id;

    const index = tareas.findIndex(x => x.id == id);
    if(index !== -1) {
        tareas[index] = tareaModificar;
        res.status(200).send('no se encontro elka tarea'); 
    }
    tareas[index] = tareaModificar;
    res.status(200).send(tareas);
});

module.exports = router;
