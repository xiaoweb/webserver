
/*
 * GET users listing.
 */
var models=require("./models");
var mongoose=require("mongoose");
var User=models.user;
mongoose.connect("mongodb://192.168.0.208/test",function(err){
  if(err){
    console.log(err);
  }else{
    console.log("已经连上mongodb");
  }
});



exports.list = function(req, res){
  /*var user=new User({
    email:"635156603@qq.com",
    name:"周礼颍"
  });
  user.save(function(){
    res.send("成功保存<br/>"+user);
  });*/
  User.find({},function(err,data){
    var name=[];
    for(var i in data){
      name.push(data[i].name);
    }
    res.render('user',{'name':name,'title':"用户列表"});
  });
};