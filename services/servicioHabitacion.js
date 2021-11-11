const HabitacionModelo =require('../models/HabitacionModelo.js')

async function insertarHabitacion(datosHabitacion){
    
    let HabitacionAInsertar=new HabitacionModelo(datosHabitacion)

    return await HabitacionAInsertar.save()
}

//servicio para buscar un dato de la BD

async function leerHabitacion(id){

    let habitacion= await HabitacionModelo.findById(id)
    return habitacion 
    
    }
    
    //servicio para buscar todos los datos
    
    async function leerHabitaciones(){
    
        let Habitaciones=await HabitacionModelo.find()
        return Habitaciones 
    
    }
    
    //servicio para editar un documento 
    async function modificarHabitacion(id,datos){
    
        return await HabitacionModelo.findByIdAndUpdate(id,datos)
    
    }
    
    //servicio para eliminar un documento
    
    async function borrarHabitacion(id){
    
        return await HabitacionModelo.findByIdAndDelete(id)
    
        
    }
    
  
module.exports={
    insertarHabitacion, leerHabitacion, leerHabitaciones, modificarHabitacion, borrarHabitacion
}