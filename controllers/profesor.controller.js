const model = require('../models/profesor.model')
const express = require('express')
const router = express.Router()

router.get('/profesores', model.getProfesores)
router.get('/profesores/:id', model.getProfesorById)
router.post('/profesores', model.createProfesor)
router.put('/profesores/:id', model.updateProfesor)
router.delete('/profesores/:id', model.deleteProfesor)

module.exports = router
