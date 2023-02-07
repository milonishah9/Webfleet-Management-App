/* eslint-disable */
const mysql = require('mysql');

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
        console.log(rows.length);
        console.log(rows);
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
    }
    else{
        res.json('notUser')
        console.log("user not found");
    }
  })
};


