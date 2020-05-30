const pool = require("../dbconfig")

const queries = {
    getProfesores: (req, res)=>{
        pool.query('SELECT * FROM profesor', (error, result)=>{
            if (error){
                console.log(error)
            }else{
                res.send(result.rows)
            }
        })
    },
    getProfesorById : (req, res)=>{
        let id = (req.params.id)
        pool.query('SELECT * FROM profesor WHERE id_profesor = $1', [id] ,(err, result) => {
        if (err){
            console.log(err)
        }else{
            res.send(result.rows)
        }
    })
    },
    createProfesor: (req, res)=>{
        let {nombre_profesor, usuario, contrasenia, titulo_profesional, correo} = req.body
        pool.query('INSERT INTO profesor (nombre_profesor, usuario, contrasenia, titulo_profesional, correo) VALUES ($1,$2,$3,$4,$5)' ,[nombre_profesor, usuario, contrasenia, titulo_profesional, correo], 
        (err, result) => {
            if (err){
                console.log(err)
            }else{
                res.send(result)
                console.log('profesor creado correctamente')
            }
        })
    },
    updateProfesor: (req, res)=>{
        let id = req.params.id
        let {nombre_profesor, usuario, contrasenia, titulo_profesional, correo} = req.body
        pool.query('UPDATE profesor SET nombre_profesor = $1, usuario = $2, contrasenia = $3, titulo_profesional = $4, correo = $5 WHERE id_profesor = $6',
        [nombre_profesor, usuario, contrasenia, titulo_profesional, correo, id], (err, result) => {
            if (err){
                console.log(err)
            }else{
                res.send(result)
                //res.status(200).send('Cancion actualizada')
                console.log('profesor editado correctamente...')
            }
        })
    }, 
    deleteProfesor: (req, res)=> {
        let id = req.params.id
        pool.query('DELETE FROM profesor WHERE id_profesor = $1', [id], 
        (err, result)=>{
            if (err){
                console.log(err)
            }
            res.status(200).send('eliminado')
            console.log('profesor eliminado..')
        })
    }
}

module.exports = queries