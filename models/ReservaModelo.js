const {model,Schema}=require('mongoose')

const ReservaModelo=Schema({
    nombre_cliente:{ 
        type:String,
        required:true
    },
    apellido_cliente: {
        type:String, 
        required:true
    },
    telefono_cliente: {
        type:String,
        required:true
    },
    fecha_inicioReserva:{
        type:Date,
        required:true
    },
    fecha_finalReserva:{
        type:Date,
        required:true
    },
    numero_personas:{
        type:Number,
        required:true
    }    
})

module.exports=model('reservaciones',ReservaModelo)







