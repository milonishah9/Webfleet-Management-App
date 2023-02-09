/* eslint-disable */
const mysql = require('mysql');

//connect sql
const pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    database : 'webfleet'
  })


//test
exports.WhereFunction = async(req,res)=>{
    pool.getConnection((err,connection)=>{
      if(err) throw err
          connection.query('SELECT * FROM vehiclemanagement WHERE Status = ?',['Active'],(err,result)=>{
          connection.release();
  
          if(!err){
              res.send(result)
              console.log(result);
          }
          else{
              console.log(err);
          }
      })
  })
  }
