/**
 * Created with JetBrains WebStorm.
 * User: RD-小小WEB
 * Date: 13-10-11
 * Time: 下午2:43
 */
var routes = require('./routes');
var user = require('./routes/user');

exports.route=function(app){
    /*index*/
    app.get("*",Islogin);
    app.get('/', routes.index);
    app.get('/users', user.list);

    /*注册会员*/
    app.get('/regist',user.regist);
    app.post('/regist',user.regist);

    /*test*/
    app.get("/test",user.test);
    app.post('/test',user.test);

    /*login*/
    app.get('/login',user.login);
    app.post('/login',user.login);

    /*logout*/
    app.get('/logout',user.logout);
    app.get('/logout',Islogin);

    /*socket*/
    app.get('/socket',user.socket);
    function Islogin(req,res,next){
        if(req.session.user){
            app.locals.user = true;
        }else{
            app.locals.user = null;
        }
        next();
    }
};