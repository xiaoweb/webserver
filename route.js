/**
 * Created with JetBrains WebStorm.
 * User: RD-小小WEB
 * Date: 13-10-11
 * Time: 下午2:43
 */
var routes = require('./routes');
var user = require('./routes/user');

exports.route=function(app){
    app.get('/', routes.index);
    app.get('/users', user.list);

    /*注册会员*/
    app.get('/registration',user.reg);
    app.post('/registration',user.regpost);
};