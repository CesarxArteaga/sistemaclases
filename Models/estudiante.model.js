const pool = require("../dbconfig")

const conn = {
    getEstudiantes : (req, res)=>{pool.query('SELECT * FROM estudiante', (err, result) => {
            if (err){
                console.log(err)
            }else{
                res.send(result.rows)
            }
        })
    }
}

module.exports = conn;