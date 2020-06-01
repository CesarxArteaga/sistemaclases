const model = require('../models/materia.model')
const express = require('express')

const router = express.Router()

router.get('/materias', model.getMaterias)
router.get('/materias/:id', model.getMateriabyId)
router.post('/materias', model.createMateria)
router.put('/materias/:id', model.updateMateria)
router.delete('/materias/:id', model.deleteMateria)

module.exports = router