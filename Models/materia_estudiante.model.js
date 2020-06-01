const pool = require('../dbconfig')

const queries = {
    getMateriaEstudiante : (req, res)=>{
        pool.query('SELECT * FROM materia_estudiante', (err, result)=>{
            if(err){
                console.log(err)
            }
            res.send(result.rows)
        })
    }, 
    getMateriaEstudianteById : (req, res) => {
        let id = req.params.id
        pool.query('SELECT * FROM materia_estudiante', [id], (err,result)=>{
            if (err) {
                console.log(err)
            }
            res.send(result.rows)
        })
    }, createMateriaEstudiante : (req, res) => {
        let { id_materia_fk, id_estudiante_fk} = req.body
        pool.query('INSER INTO materia_estudiante ( id_materia_fk, id_estudiante_fk) VALUES ($1, $2)', [id_materia_fk, id_estudiante_fk] ,
        (err,result)=>{
            if(err){
                console.log(err)
            }
            res.send(result)
            console.log('Materia_Estudiante creada....')
        })
    },
    updateMateriaEstudiante : (req,res)=>{
        let id = req.params.id
        let { id_materia_fk, id_estudiante_fk} = req.body
        pool.query('UPDATE materia_estudiante SET id_materia_fk = $1, id_estudiante_fk = $2 WHERE id_materia_estudiante = $3', [id_materia_fk, id_estudiante_fk, id],
        (err, result)=> {
            if(err){
                console.log(err)
            }
            res.send(result)
            console.log('Materia_Estudiante actualizada...')
        })
    }
    ,
    deleteMateriaEstudiante: (req, res)=>{
        let id = req.params.id
        pool.query('DELETE FROM materia_estudiante WHERE id_materia_estudiante = $1', [id], (err, result)=>{
            if (err){
                console.log(err)
            }
            res.send(result)
            console.log('Materia_Estudiante eliminada..')
        })
    }
}

module.exports = queries