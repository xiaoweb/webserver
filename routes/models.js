/**
 * Created with WebStorm.
 * User: RD-小小WEB
 * Date: 13-10-3
 * Time: 下午8:14
 */
var mongoose=require('mongoose'),
    schema=mongoose.Schema;
mongoose.connect('mongodb://192.168.0.208/test',function(err){
  err?console.log("连接出错 "+err):console.log("连接mongodb成功");
});

var db={};
var _user=new schema({
  email:String,
  password:String,
  name:String,
  age:Number
});
db.user=mongoose.model('user',_user);

var _record=new schema({
  time:Date,
  name:String
});
db.record=mongoose.model('record',_record);


exports.db=db;

