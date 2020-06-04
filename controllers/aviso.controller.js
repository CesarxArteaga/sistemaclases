const model = require('../models/aviso.model')
const express = require('express')
const router = express.Router()

router.get('/avisos', model.getAvisos)
router.get('/avisos/:id', model.getAvisoById)
router.post('/avisos', model.createAviso)
router.put('/avisos/:id', model.updateAviso)
router.delete('/avisos/:id', model.deleteAviso)

module.exports = router