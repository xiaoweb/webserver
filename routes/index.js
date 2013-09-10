
/*
 * GET home page.
 */
var mysql=require("mysql");

exports.index = function(req, res){
    var connection = mysql.createConnection({
        host:'db4free.org',
        user:'z900815',
        password:"zhou900815",
        database:'xiaowebsql'
    });
    connection.connect();
    connection.query('SELECT * FROM user',function(err,rows,fields){
        if(err){
            console.log(err);
        }else{
            console.log(rows);
            res.render('index', { title: 'Express','user':rows });
        }
        connection.end();
    });

};