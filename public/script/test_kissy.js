/**
 * Created with JetBrains WebStorm.
 * User: RD-小小WEB
 * Date: 13-9-13
 * Time: 上午11:57
 * To change this template use File | Settings | File Templates.
 */
KISSY.use('button,dom',function(s,btn,dom){
    s.ready(function(){
        var b = new btn({
            content: "这是按钮",
            width: 200,
            prefixCls: "liz-",
            tooltip: "我有新皮肤",
            value:"10",
            render:"#edit"
        });

        b.on('click',function(){alert(1)});
        b.render();
    });
});