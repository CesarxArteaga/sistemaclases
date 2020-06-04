const pool = require('../dbconfig')

const queries = {
    getTareas : (req, res) => {
        pool.query('SELECT * FROM tarea', (err, result )=> {
            if (err){
                console.log(err)
            }
            res.send(result.rows)
        })
    },
    getTareaById : (req, res)=>{
        id = req.params.id
        pool.query('SELECT * FROM tarea WHERE id_tarea = $1', [id], (err, result)=>{
            if (err){
                console.log(err)
            }
            res.send(result.rows)
        })
    },
    createTarea : (req, res)=>{
        let {titulo_tarea, fecha_creacion, fecha_entrega, envio, id_materia_fk} = req.body
        pool.query('INSERT INTO tarea(titulo_tarea, fecha_creacion, fecha_entrega, envio, id_materia_fk) VALUES($1,$2,$3,$4,$5)',
        [titulo_tarea, fecha_creacion, fecha_entrega, envio, id_materia_fk], (err, result)=>{
            if(err){
                console.log(err)
            }
            res.status(200).send(result)
            console.log('tarea creada correctamente...')
        })
    }, 
    updateTarea: (req, res) =>{
        let id = req.params.id
        let {titulo_tarea, fecha_creacion, fecha_entrega, envio, id_materia_fk} = req.body
        pool.query('UPDATE tarea SET titulo_tarea = $1, fecha_creacion = $2, fecha_entrega = $3, envio = $4, id_materia_fk = $5 WHERE id_tarea = $6',
        [titulo_tarea, fecha_creacion, fecha_entrega, envio, id_materia_fk, id], (err, result)=>{
            if(err){
                console.log(err)
            }
            res.status(200).send(result)
            console.log('tarea actualizada...')
        })
    }, 
    deleteTarea: (req, res)=>{
        let id = req.params.id
        pool.query('DELETE FROM tarea WHERE id_tarea = $1', [id], (err, result)=>{
            if(err){
                console.log(err)
            }
            res.status(200).send(result)
            console.log('tarea eliminada...')
        })
    }
}

module.exports = queries