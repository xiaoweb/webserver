
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
    var body= req.body;
    if(body.password1 === body.password2){
        model.db.user.find({email:body.email},function(err,data){
            if(err){
                console.log(err);
                res.send({'msg':err});
            }else{
                if(data.length<=0){
                    var user=new model.db.user({
                        email:body.email,
                        password:body.password1,
                        name:body.username,
                        regtime:new Date()
                    });
                    user.save(function(err){
                        if(err){
                            res.send({'msg':'注册失败'});
                        }else{
                            res.send({'msg':'注册成功','suc':'true'});
                        }
                    });
                }else{
                    res.send({'msg':body.email+'已被注册'});
                }
            }
        });
    }else{
        res.send({'msg':"两次密码输入的不一样，请重新输入"});
    }
};
