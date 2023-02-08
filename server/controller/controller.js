/* eslint-disable */
const mysql = require('mysql');
// const Cryptr = require('cryptr');
const bcrypt = require("bcrypt")


//connect sql
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'webfleet'
  });

//connection pool
connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Server!');
});

//register user
exports.registerUser = async(req,res) => {
    console.log(req.body)
    connection.query('INSERT INTO user SET ?',[req.body], (err, rows) => {
        if(err) throw err;
        console.log('The data from users table are: \n', rows);
        res.json('registered')
        connection.end();
    });
};


//login auth
exports.loginAuth = async(req,res) => {
    const username = req.body.username;
    const password = req.body.password;
  connection.query('SELECT * FROM user WHERE username = ? AND password = ? AND is_admin = 1',[username,password],(err,result)=>{
    if(result.length > 0){
        console.log('user logged');
        res.json('user')
        connection.end();
    }
    else{
        res.json('notUser')
        console.log("user not found");
    }
  })
};


//Add user
exports.addUser = async(req,res) => {

  var data = req.body;

  var select = "SELECT * FROM `user` WHERE `email` = '" + data.email + '\'' ;

  connection.query(select, function (err, result) {    

    if (err) throw err;
    
    if (result.length === 0) {

      bcrypt.hash(data.password, 10, function(err, hash) {
      
      var insert = "INSERT INTO `user`( `username`, `email`, `password`, `is_admin`) VALUES (" + '\'' + data.username  + '\',' + '\'' + data.email+ '\',' + '\'' + hash +'\',' + '\'' + data.is_admin +  '\''+ ')'; 
      
      connection.query(insert, function (err, result) {
        
          if (err) throw err;
          
          console.log(result);

        });

        var response = {

          'success' : true,

          'massage' : 'User has been added'

        };

        res.json(response, 200)

      });

    }else{

      var response = {

        'success' : false,

        'massage' : 'Email is already taken.'

      };

      res.json(response, 400)

    };

  });

};



//Update user
exports.updateUser = async(req,res) => {

  
  var data = req.body;
 

  var select = "SELECT * FROM `user` WHERE `id` = '" + data.user_id + '\'' ;

  connection.query(select, function (err, result) {    

    if (err) throw err;
    
    if (result.length !== 0) {

      bcrypt.hash(data.password, 10, function(err, hash) {

        var update = "UPDATE `user` SET `username`='" + data.username + '\',`email`='+ '\'' + data.email+ '\'' +',`password`='+ '\'' +hash + '\''  +',`is_admin`='+  '\'' + data.is_admin + '\'' +' WHERE id =' +  '\'' +  data.user_id +  '\'' ; 
        
        connection.query(update, function (err, result) {
          
          console.log(err);
  
          });
  
          response = {
  
            'success' : true,
  
            'massage' : 'User has been updated'
            
          };
  
          res.json(response, 200)


      });
      

    }else{

      response = {

        'success' : false,

        'massage' : 'User not found.'

      };

      res.json(response, 400)

    };

  });

};


