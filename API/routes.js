const router = require('express').Router()
const connection = require('./config/conexion')

// Asignamos todas las rutas

//get toda la data
router.get('/',(req,res)=>{
   let sql = 'SELECT * FROM movie'
   connection.query(sql,(err,rows,fields)=>{
      if(err) throw err;
      else{
         res.json(rows)
      }
   })
})

//get data por id
router.get('/:id',(req,res)=>{
   const {id} = req.params
   let sql = 'SELECT * FROM movie where mov_id = ?'
   connection.query(sql,[id],(err,rows,fields)=>{
      if(err) throw err;
      else{
         res.json(rows)
      }
   })
})


//post crear new data
router.post('/',(req,res)=>{
let {mov_id,mov_title,mov_year,mov_time,mov_lang,mov_dt_rel,mov_rel_country}=req.body
 

 let sql =  `INSERT INTO movie VALUES(${mov_id},'${mov_title}',${mov_year},${mov_time},'${mov_lang}','${mov_dt_rel}','${mov_rel_country}')`



   connection.query(sql,(err,rows,fields)=>{
      if(err) throw err;
      else{
         res.json({status:'Movie Add'})
      }
   })
})


//Delete - eliminar un dato
router.delete('/:id',(req,res)=>{
   const {id} = req.params   
   let sql =`DELETE FROM movie WHERE mov_id=${id}`
   connection.query(sql,(err,row,fields)=>{
      if (err) throw err
         else {
   res.json({status:'Movie Delete'})
               }
   })
})


//Update - actualizar un dato
router.put('/:id',(req,res)=>{
   const {id} = req.params  
   const {mov_id,mov_title,mov_year,mov_time,mov_lang,mov_dt_rel,mov_rel_country}=req.body

   let sql =`UPDATE movie SET mov_id = ${mov_id}, mov_title = '${mov_title}', mov_year = ${mov_year}, mov_time = ${mov_time}, mov_lang = '${mov_lang}', mov_dt_rel = '${mov_dt_rel}', mov_rel_country = '${mov_rel_country}' WHERE mov_id=${id}`
   connection.query(sql,(err,row,fields)=>{
      if (err) throw err
         else {
   res.json({status:'Movie Update'})
               }
   })
})



//Exportamos la ruta creada
module.exports = router;