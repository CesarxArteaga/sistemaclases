const pool = require('../dbconfig')

const queries = {
    getAvisos: (req, res)=>{
        pool.query('SELECT * FROM aviso', (err, result)=>{
            if(err){
                console.log(err)
            }
            res.send(result.rows)
        })
    }, 
    getAvisoById: (req, res)=>{
        let id = req.params.id
        pool.query('SELECT * FROM aviso WHERE id_aviso = $1', [id], (err, result)=>{
            if(err){
                console.log(err)
            }
            res.send(result.rows)
        })
    }, 
    createAviso : (req, res)=>{
        let {titulo_aviso, descripcion, id_materia_fk} = req.body
        pool.query('INSERT INTO aviso(titulo_aviso, descripcion, id_materia_fk) VALUES($1,$2,$3)', [titulo_aviso, descripcion, id_materia_fk],
        (err, result)=>{
            if(err){
                console.log(err)
            }
            res.status(200).send(result)
            console.log('Aviso creado correctamente...')
        })
    },
    updateAviso: (req, res)=>{
        let id = req.params.id
        let {titulo_aviso, descripcion, id_materia_fk} = req.body
        pool.query('UPDATE aviso SET titulo_aviso=$1, descripcion=$2, id_materia_fk=$3 WHERE id_aviso = $4',
        [titulo_aviso, descripcion, id_materia_fk, id], (err, result)=>{
            if (err){
                console.log(err)
            }
            res.status(200).send(result)
            console.log('Aviso actualizado...')
        })
    },
    deleteAviso: (req, res)=>{
        let id = req.params.id
        pool.query('DELETE FROM aviso WHERE id_aviso = $1', [id], (err, result)=>{
            if(err){
                console.log(err)
            }
            res.status(200).send(result)
            console.log('Aviso eliminado...')
        })
    }
}

module.exports = queries