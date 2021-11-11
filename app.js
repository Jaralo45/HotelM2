require('dotenv').config()

const ServidorModelo=require('./models/ServidorModelo.js')

const ServidorReservas=new ServidorModelo()

ServidorReservas.encenderServidor()

 

 
 
