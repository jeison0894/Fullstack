require('./config/conexion');

const express = require('express');


// Si no existe el puerto con el operador corto circuito lo colocamos en el puerto 3000
const port = (process.env.port || 3000)


//Creamos la instancia de express guardada en una variable
const app = express();


//Esto es para que express pueda recibir datos de tipo json
app.use(express.json())


//configuramos el puerto
app.set('port',port)


//Pasamos las rutas
app.use('/api',require('./routes'))


//Iniciamos express
app.listen(app.get('port'),(err)=>{
   if(err)console.log('Failed to started server' + err)
   else{
      console.log('Database started succesfully in the port ' + port)
   }
})


//Aqui hasta el momento se configuro el server node con express y ya esta corriendo en el puerto 3000