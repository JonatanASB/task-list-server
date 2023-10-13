
const express = require('express');
const router = express.Router();
let tareas = require('./tareas.json')

// Ruta para listar las tareas que están completas
router.get('/completadas', (req, res) => {
    const tareasCompletadas = tareas.filter(tarea => tarea.completada);

    if (tareasCompletadas.length>0) {
        res.status(200).send(tareasCompletadas);
      } else {
        res.status(404).send({
          mensaje: "no hay tareas completadas",
        });
      }
});
   

// Ruta para listar las tareas que están incompletas
router.get('/incompletas', (req, res) => {
    const tareasIncompletas = tareas.filter(tarea => tarea.completada == false);

    if (tareasIncompletas.length>0) {
        res.status(200).send(tareasIncompletas);
      } else {
        res.status(404).send({
          mensaje: "no hay tareas completadas",
        });
      }
});

module.exports = router;