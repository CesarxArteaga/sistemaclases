const model = require('../models/tarea.model')
const express = require('express')
const router = express.Router()

router.get('/tareas', model.getTareas)
router.get('/tareas/:id', model.getTareaById)
router.post('/tareas', model.createTarea)
router.put('/tareas/:id', model.updateTarea)
router.delete('/tareas/:id', model.deleteTarea)

module.exports = router