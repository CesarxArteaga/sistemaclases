const model = require('../models/estudiante.model')
const expres = require('express')
const router = expres.Router()

router.get('/estudiantes', model.getEstudiantes)
router.get('/estudiantes/:id', model.getEstudianteById)
router.post('/estudiante', model.createEstudiante)
router.put('/estudiante/:id', model.updateEstudiante)
router.delete('/estudiante/:id', model.deleteEstudiante)

module.exports = router;