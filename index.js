const port = 3000;
const express = require('express');
const app = express();
let tareas = require('./tareas.json')
app.use(express.json());

const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

app.use('/listar', listViewRouter);
app.use('/editar', listEditRouter);

app.get('/', (req, res) => {
  res.status(200).send(tareas)
})

app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`);
})