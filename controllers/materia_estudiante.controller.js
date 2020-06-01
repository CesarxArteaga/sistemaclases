const model = require('../models/materia_estudiante.model')
const express = require('express')
const router = express.Router()

router.get('/materia_estudiante', model.getMateriaEstudiante)
router.get('/materia_estudiante/:id', model.getMateriaEstudianteById)
router.post('/materia_estuadiante', model.createMateriaEstudiante)
router.put('/materia_estudiante/:id', model.updateMateriaEstudiante)
router.delete('/materia_estudiante/:id', model.deleteMateriaEstudiante)

module.exports = router