
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

/*会员注册*/
exports.reg=function(req,res){
    res.render("registration",{'title':"帐号注册"});
};
exports.regpost=function(req,res){
    var body= req.body.user;
    if(req.body.user.password1 === req.body.user.password2){
        model.db.user.find({email:body.email},function(err,data){
            if(data.length<=0){
                var user=new model.db.user({
                     email:body.email,
                     password:body.password1,
                     name:body.name,
                     regtime:new Date()
                });
                 user.save(function(err){
                     if(err){
                        res.send('注册失败');
                     }else{
                        res.send('注册成功');
                     }
                 });
            }else{
                res.send('<script>document.location.href="http://www.baidu.com"</script>');
            }
        });
    }else{
        res.send("两次密码输入的不一样，请重新输入");
    }
};
