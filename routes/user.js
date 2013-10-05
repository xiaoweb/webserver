
/*
 * GET users listing.
 */
var model=require('./models');

exports.list=function(req,res){
  var one = new model.db.user({
    email:'635156603@qq.com',
    password:'123456',
    name:'小明',
    age:18
  });
  one.save(function(err,data){
    var msg;
    err?(msg='保存未成功'):(msg='已成功保存 '+data.name);
    var record=new model.db.record({
      time:Date.now(),
      name:data.name
    });
    record.save();
    res.render('user',{
      'title':"保存数据返回页",
      'msg':msg
    });
  });
};