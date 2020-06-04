const pool = require('../dbconfig')

const queries = {
    getMaterias : (req, res) => {
        pool.query('SELECT * FROM materia' , (err, result)=>{
            if (err){
                console.log(err)
            }
            res.send(result.rows)
        })
    }, 
    getMateriabyId : (req, res) => {
        id = req.params.id
        pool.query('SELECT * FROM materia WHERE id_materia = $1', [id], (err, result)=>{
            if(err){
                console.log(err)
            }
            res.send(result.rows)
        })
    }, 
    createMateria: (req, res) => {
        let {nombre_materia, id_profesor_fk} = req.body
        pool.query('INSERT INTO materia (nombre_materia, id_profesor_fk) VALUES ($1,$2)', [nombre_materia, id_profesor_fk],
        (err, result)=>{
            if(err){
                console.log(err)
            }
            res.send(result)
            console.log('Materia creada correctamente...')
        })
    },
    updateMateria : (req, res) => {
        let id = req.params.id
        let {nombre_materia, id_profesor_fk} = req.body
        pool.query('UPDATE materia SET nombre_materia = $1, id_profesor_fk = $2 WHERE id_materia = $3', [nombre_materia, id_profesor_fk, id],
        (err, result)=>{
            if (err) {
                console.log(err)
            }
            res.send(result)
            console.log('Materia actualizada correctamente...')
        })
    }
    ,
    deleteMateria: (req, res ) => {
        let id = req.params.id
        pool.query('DELETE FROM materia WHERE id_materia = $1', [id], (err, result)=>{
            if(err){
                console.log(err)
            }
            console.log('Materia eliminada...')
            res.send(result)
        })
    }
}

module.exports = queries