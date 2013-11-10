/**
 * Created with JetBrains WebStorm.
 * User: RD-小小WEB
 * Date: 13-10-12
 * Time: 下午1:45
 */

//连接数据库
var mongoose = require("mongoose");
var config={
    host:'192.168.2.186',
    name:'webserver',
    port:'27017',
    user:'webserver',
    password:'xiaoweb'
};

exports.open=function(){
    mongoose.connect('mongodb://'+config.user+':'+config.password+'@'+config.host+':'+config.port+'/'+config.name,function(err){
        err?console.log("连接出错("+err+")"):console.log("连接mongodb成功");
    });
};