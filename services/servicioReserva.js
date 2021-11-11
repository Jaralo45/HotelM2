const ReservaModelo =require('../models/ReservaModelo.js')

async function insertarReserva(datosReserva){
    
    let ReservaAInsertar=new ReservaModelo(datosReserva)

    return await ReservaAInsertar.save()
}


async function leerReserva(id){

    let reserva= await ReservaModelo.findById(id)
    return reserva 
    
    }
    
    //servicio para buscar todos los datos
    
    async function leerReservas(){
    
        let reservas=await ReservaModelo.find()
        return reservas 
    
    }
    
    //servicio para editar un documento 
    async function modificarReserva(id,datos){
    
        return await ReservaModelo.findByIdAndUpdate(id,datos)
    
    }
    
    //servicio para eliminar un documento
    
    async function borrarReserva(id){
    
        return await ReservaModelo.findByIdAndDelete(id)
    
    
    
    }    

module.exports={
    insertarReserva, leerReserva, leerReservas, modificarReserva, borrarReserva
}