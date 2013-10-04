/**
 * Created with WebStorm.
 * User: RD-小小WEB
 * Date: 13-10-3
 * Time: 下午8:14
 */
var mongoose=require("mongoose");
var schema=mongoose.Schema;

var _user=new schema({
  email:String,
  name:String,
  salt:String,
  password:String
});
exports.user=mongoose.model("user",_user);
