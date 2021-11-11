const {model,Schema}=require('mongoose')

const HabitacionModelo=Schema({
    nombre_habitacion:{ 
        type:String,
        required:true
    },
    fotografia_habitacion: {
        type:String, 
        required:true
    },
    descripcion: {
        type:String,
        required:true
    },
    precio_adultoNoche:{
        type:Number,
        required:true
    },
    precio_niñoNoche:{
        type:Number,
        required:true
    }
})

module.exports=model('habitaciones',HabitacionModelo)

 







