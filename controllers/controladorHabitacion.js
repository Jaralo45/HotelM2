//habla con las rutas
const {request, response}=require('express')
const {insertarHabitacion}=require('../services/servicioHabitacion.js')
const {leerHabitacion}=require('../services/servicioHabitacion.js')
const {leerHabitaciones}=require('../services/servicioHabitacion.js')
const {modificarHabitacion}=require('../services/servicioHabitacion.js')
const {borrarHabitacion}=require('../services/servicioHabitacion.js')

async function registrarHabitacion(peticion=request,respuesta=response){
    let datosHabitacion=peticion.body;

    try{

        await insertarHabitacion(datosHabitacion)
        respuesta.status(200).json({
            estado:true, mensaje:"Exito registrando habitacion"
        })


    }catch(error){
        respuesta.status(400).json({
            estado:false, mensaje:"Error registrando habitacion."+error
        })

    }
}

async function buscarHabitacion(peticion=request,respuesta=response){
    let id=peticion.params.id

    try{

        let habitacion= await leerHabitacion(id)
        respuesta.status(200).json({
            estado:true,
            datos:habitacion
        })

    }
    catch(error){
        respuesta.status(400).json({
            estado:false, mensaje:"Error al buscar habitacion ......."+error
        })

    }
}

async function buscarHabitaciones(peticion=request,respuesta=response){
    try{

        let habitaciones= await leerHabitaciones()
        respuesta.status(200).json({
            estado:true,
            datos:habitaciones
        })

    }
    catch(error){
        respuesta.status(400).json({
            estado:false, 
            mensaje:"Error al buscar."+error
        })

    }
}

async function editarHabitacion(peticion=request,respuesta=response){
   
    let datos=peticion.body
    let id=peticion.params.id


    try{

        await modificarHabitacion(id,datos)
        respuesta.status(200).json({
            estado:true, 
            mensaje:"Exito editando habitacion"
        })


    }catch(error){
        respuesta.status(400).json({
            estado:false, mensaje:"Error al editar "+error
        })

    }
    

    }

async function eliminarHabitacion(peticion=request,respuesta=response){

       let id=peticion.params.id

    try{

        await borrarHabitacion(id)
        respuesta.status(200).json({
            estado:true, 
            mensaje:"Exito eliminando habitacion"
        })


    }catch(error){
        respuesta.status(400).json({
            estado:false, mensaje:"La habitaciòn no pudo ser borrada  " +error
        })

    }    
}

module.exports={
    registrarHabitacion,
    buscarHabitacion,
    buscarHabitaciones,
    editarHabitacion,
    eliminarHabitacion
}