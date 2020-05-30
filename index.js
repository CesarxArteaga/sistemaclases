const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const db = require("./dbconfig")
const estudianteController = require('./controllers/estudiante.controller')
const profesorController = require('./controllers/profesor.controller')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

db.connect((err)=>{
    if (err){
        console.log(err)
    } 
    else console.log("conectado a base de datos..")
})

app.get('/', (req,res)=>res.send("APIREST Sistema Clases..."))
app.use('/api', estudianteController)
app.use('/api', profesorController)

app.listen(process.env.PORT || 3000, () => console.log("runing..."))