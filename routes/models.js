/**
 * Created with WebStorm.
 * User: RD-小小WEB
 * Date: 13-10-3
 * Time: 下午8:14
 */
var mongoose=require('mongoose'),
    schema=mongoose.Schema;

var db={};
var _user=new schema({
  email:String,
  password:String,
  name:String,
  regtime:Date
});
db.user=mongoose.model('user',_user);
exports.db=db;

