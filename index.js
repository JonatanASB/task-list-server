const http = require("http");
const port = 3000;
const express = require('express');
const app = express();

const tareas = [
    { id: 1, descripcion: 'Hacer el codigo para el laboratorio', completado: false },
    { id: 2, descripcion: 'Hacer los oficios de la casa', completado: false },
    { id: 3, descripcion: 'Estudiar para el examen', completado: false }
  ];

    app.get('/tareas', (req, res) => {
          res.json(tareas);
    })

app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`);
})