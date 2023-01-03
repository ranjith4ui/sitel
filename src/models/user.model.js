'user strict';
var dbConn = require('../../config/db.config');

//User object create
var User = function(user){
    this.name     = user.name;
    this.email          = user.email;
    this.dob          = user.dob;

};
User.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO Users set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
User.findById = function (id, result) {
    dbConn.query("Select * from Users where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
User.findAll = function (result) {
    dbConn.query("Select * from Users", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('users : ', res);  
            result(null, res);
        }
    });   
};
User.update = function(id, user, result){
  dbConn.query("UPDATE Users SET name=?,email=?,dob=? WHERE id = ?", [user.name,user.email,user.dob,id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
User.delete = function(id, result){
     dbConn.query("DELETE FROM Users WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= User;