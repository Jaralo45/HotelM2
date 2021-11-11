const express = require('express')
const cors = require('cors')
const{conectarBD}=require('../database/conexion.js')
const rutas=require('../routes/rutas.js') 


class ServidorModelo{
    constructor(){
        this.app = express()
        this.despertarBD()
        this.llamarAuxiliares()
        this.enrutarPeticiones()
        
    } 

    encenderServidor(){       
        this.app.listen(process.env.PORT,function(){
            console.log("Servidor encendido "+process.env.PORT);
        })
    }

    enrutarPeticiones(){

        this.app.use('/',rutas)
      
    }

    despertarBD(){

        conectarBD()

    }
    llamarAuxiliares(){
        this.app.use(express.json())
        this.app.use(cors())

    }

}

module.exports=ServidorModelo