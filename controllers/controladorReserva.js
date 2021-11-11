//habla con las rutas
const {request, response}=require('express')
const {insertarReserva}=require('../services/servicioReserva.js')
const {leerReserva}=require('../services/servicioReserva.js')
const {leerReservas}=require('../services/servicioReserva.js')
const {modificarReserva}=require('../services/servicioReserva.js')
const {borrarReserva}=require('../services/servicioReserva.js')
 
async function registrarReserva(peticion=request,respuesta=response){
    
    let datosReserva=peticion.body;

    try{

        await insertarReserva(datosReserva)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito registrando reserva"
        })


    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"ups......."+error
        })
    
    }
   
}

async function buscarReserva(peticion=request,respuesta=response){
    let id=peticion.params.id

        try{
    
            let reserva= await leerReserva(id)
            respuesta.status(200).json({
                estado:true,
                datos:reserva
            })
    
        }
        catch(error){
            respuesta.status(400).json({
                estado:false, mensaje:"Error buscando la reserva " +error
            })
    
        }
    }

async function buscarReservas(peticion=request,respuesta=response){
    try{

        let reservas= await leerReservas()
        respuesta.status(200).json({
            estado:true,
            datos:reservas
        })

    }
    catch(error){
        respuesta.status(400).json({
            estado:false, 
            mensaje:"Error buscando reservas " +error
        })

    }
}

async function editarReserva(peticion=request,respuesta=response){
    let datos=peticion.body
    let id=peticion.params.id


    try{

        await modificarReserva(id,datos)
        respuesta.status(200).json({
            estado:true, 
            mensaje:"Exito editando la reserva"
        })


    }catch(error){
        respuesta.status(400).json({
            estado:false, mensaje:"Exito editando la reserva " +error
        })

    }
    

    }

async function eliminarReserva(peticion=request,respuesta=response){

    let id=peticion.params.id

    try{

        await borrarReserva(id)
        respuesta.status(200).json({
            estado:true, 
            mensaje:"Exito eliminando reserva"
        })


    }catch(error){
        respuesta.status(400).json({
            estado:false, mensaje:"Exito eliminando reserva " +error
        })

    }    

    }


module.exports={
    registrarReserva,
    buscarReserva,
    buscarReservas,
    editarReserva,
    eliminarReserva
}