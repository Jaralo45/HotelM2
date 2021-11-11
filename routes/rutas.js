const {Router}=require('express') 

const {registrarHabitacion}=require('../controllers/controladorHabitacion.js')
const {buscarHabitacion}=require('../controllers/controladorHabitacion.js')
const {buscarHabitaciones}=require('../controllers/controladorHabitacion.js')
const {editarHabitacion}=require('../controllers/controladorHabitacion.js')
const {eliminarHabitacion}=require('../controllers/controladorHabitacion.js')

const {registrarReserva}=require('../controllers/controladorReserva.js')
const {buscarReserva}=require('../controllers/controladorReserva.js')
const {buscarReservas}=require('../controllers/controladorReserva.js')
const {editarReserva}=require('../controllers/controladorReserva.js')
const {eliminarReserva}=require('../controllers/controladorReserva.js')


const rutas=Router()    
    rutas.get('/avanzada/habitaciones',buscarHabitacion)
    rutas.get('/avanzada/habitaciones/id',buscarHabitaciones)
    rutas.post('/avanzada/habitaciones',registrarHabitacion)
    rutas.put('/avanzada/habitaciones/id',editarHabitacion)
    rutas.delete('/avanzada/habitaciones/id',eliminarHabitacion)
    
    rutas.get('/avanzada/reservas',buscarReserva)
    rutas.get('/avanzada/reservas/:id',buscarReservas)
    rutas.post('/avanzada/reservas',registrarReserva)    
    rutas.put('/avanzada/reservas/:id',editarReserva)
    rutas.delete('/avanzada/reservas/:id',eliminarReserva)

    
    module.exports=rutas