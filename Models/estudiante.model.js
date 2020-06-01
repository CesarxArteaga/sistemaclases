const pool = require("../dbconfig")

const queries = {
    getEstudiantes : (req, res)=>{pool.query('SELECT * FROM estudiante', (err, result) => {
            if (err){
                console.log(err)
            }else{
                res.send(result.rows)
            }
        })
    },
    getEstudianteById : (req, res)=>{
        let id = (req.params.id)
        pool.query('SELECT * FROM estudiante WHERE id_estudiante = $1', [id] ,(err, result) => {
        if (err){
            console.log(err)
        }else{
            res.send(result.rows)
        }
    })
    },
    createEstudiante: (req, res)=>{
        let {nombre_estudiante, usuario, contrasenia, matricula, carrera, correo} = req.body
        pool.query('INSERT INTO estudiante (nombre_estudiante, usuario, contrasenia, matricula, carrera, correo) VALUES ($1,$2,$3,$4,$5,$6)' ,[nombre_estudiante, usuario, contrasenia, matricula, carrera, correo], 
        (err, result) => {
            if (err){
                console.log(err)
            }else{
                res.send(result)
                console.log('estudiante creado correctamente')
            }
        })
    },
    updateEstudiante: (req, res)=>{
        let id = req.params.id
        let {nombre_estudiante, usuario, contrasenia, matricula, carrera, correo} = req.body
        pool.query('UPDATE estudiante SET nombre_estudiante = $1, usuario = $2, contrasenia = $3, matricula = $4, carrera = $5, correo =$6 WHERE id_estudiante = $7',
        [nombre_estudiante, usuario, contrasenia, matricula, carrera, correo, id], (err, result) => {
            if (err){
                console.log(err)
            }else{
                res.send(result)
                //res.status(200).send('Cancion actualizada')
                console.log('estudiante editado correctamente...')
            }
        })
    }, 
    deleteEstudiante: (req, res)=> {
        let id = req.params.id
        pool.query('DELETE FROM estudiante WHERE id_estudiante = $1', [id], 
        (err, result)=>{
            if (err){
                console.log(err)
            }
            res.status(200).send('eliminado')
            console.log('estudiante eliminado..')
        })
    }
}

module.exports = queries;