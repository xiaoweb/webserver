
/*
 * GET home page.
 */
var mysql=require("mysql");

exports.index = function(req, res){
    var connection = mysql.createConnection({
        host:'192.168.2.175',
        user:'root',
        password:"123456",
        database:'test'
    });
    connection.connect();
    connection.query('SELECT * FROM test',function(err,rows,fields){
        if(err){
            console.log(err);
        }else{
            console.log(rows);
            res.render('index', { title: 'Express','user':rows });
        }
        connection.end();
    });

};