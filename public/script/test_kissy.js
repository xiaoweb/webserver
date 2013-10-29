/**
 * Created with JetBrains WebStorm.
 * User: RD-小小WEB
 * Date: 13-9-13
 * Time: 上午11:57
 * To change this template use File | Settings | File Templates.
 */
KISSY.use("base",function(S,b){
    function test(){
        this.x=10;
    }
    S.extend(test,b);
    test.ATTRS={
        size:{
            value:10,
            getter:function(x){
                console.log(new Date());
                return x+1;
            },
            setter:function(x){
                return x;
            },
            validator:function(x){
                if(x < 10){
                    return false;
                }
            }
        }
    };
    var obj=new test();

    obj.addAttr("name",{
        value: test.ATTRS.size.value,
        getter:test.ATTRS.size.getter,
        validator:test.ATTRS.size.validator
    });
    obj.set("name",8);
    console.log(obj.get("name"));
});

