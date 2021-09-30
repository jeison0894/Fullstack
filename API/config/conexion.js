const mysql = require('mysql');
const connection = mysql.createConnection({
   host:'bzvrqimrhuvizlayduoi-mysql.services.clever-cloud.com',
   user:'ueqltvghdsttpr5e',
   password:'BTevwcrdtWUqVjUl4Go2',
   port:3306,
   database:'bzvrqimrhuvizlayduoi'
})

connection.connect((err) => {
    if (err) {
        console.log('ha ocurrido un error' + err)
    } else {
        console.log('La base de datos se coneecto exitosamente')
    }
});
setInterval(function () {
    connection.query('SELECT 1');
}, process.env.PORT || 3000);

module.exports = connection;