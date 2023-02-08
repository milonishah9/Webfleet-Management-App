/* eslint-disable */
const mysql = require('mysql');

//connect sql
const pool = mysql.createPool({
  connectionLimit : 10,
  host : 'localhost',
  user : 'root',
  database : 'webfleet'
})

//register user
exports.registerUser = async(req,res)=>{
  pool.getConnection((err,connection)=>{
    if(err) throw err
        connection.query('INSERT INTO user SET ?',[req.body],(err,result)=>{
        connection.release();

        if(!err){
            res.json('registered')
            console.log('The data from users table are: \n',result);
        }
        else{
            console.log(err);
        }
    })
})
}


//login auth
exports.loginAuth = async(req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    pool.getConnection((err,connection)=>{
      if(err) throw err
          connection.query('SELECT * FROM user WHERE username = ? AND password = ? AND is_admin = 1',[username,password],(err,result)=>{
          connection.release();
  
          if(result.length > 0){
            console.log('user logged');
            res.json('user')
        }
        else{
            res.json('notUser')
            console.log("user not found");
        }
      })
  })
  
};

//vehicle assignment
exports.vehicleAssignment = async(req,res)=>{
  pool.getConnection((err,connection)=>{
    if(err) throw err
        connection.query('SELECT * FROM vehiclemanagement',(err,result)=>{
        connection.release();

        if(!err){
            res.send(result)
            console.log('The data from users table are: \n',result);
        }
        else{
            console.log(err);
        }
    })
})
}

//to get number of driver at home dashboard card
exports.allDrivers = async(req,res)=>{
  pool.getConnection((err,connection)=>{
    if(err) throw err
        connection.query('SELECT COUNT(ALL Operator) from vehiclemanagement',(err,result)=>{
        connection.release();

        if(!err){
            res.send(result)
        }
        else{
            console.log(err);
        }
    })
})
}


