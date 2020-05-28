const express = require('express')
const cors = require("cors")
const db = require("./dbconfig")
const estudianteModel = require('./Models/estudiante.model')

const app = express()
app.use(cors())

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

db.connect((err)=>{
    if (err){
        console.log(err)
    } 
    else console.log("conectado a base de datos..")
})

app.get('/', (req,res)=>res.send("APIREST Sistema Clases..."))
app.get('/estudiantes', estudianteModel.getEstudiantes)

app.listen(process.env.PORT || 3000, () => console.log("runing..."))