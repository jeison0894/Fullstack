const mysql = require('mysql');
const connection = mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'root',
   port:3306,
   database:'movies'
})

connection.connect((err)=>{
   if (err) {
      console.log('There is an error' + err)
   } else {
      console.log('Database connected.')
   }
})


module.exports=connection;