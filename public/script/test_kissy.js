/**
 * Created with JetBrains WebStorm.
 * User: RD-小小WEB
 * Date: 13-9-13
 * Time: 上午11:57
 * To change this template use File | Settings | File Templates.
 */

KISSY.use("xiaozhou,button",function(S,x,but){
    var p =new but({
        content:"a" ,
        render: "body",
        tooltip: "点击我有惊喜~"
    });
    p.render();
});
