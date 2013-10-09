/**
 * Created with WebStorm.
 * User: RD-小小WEB
 * Date: 13-10-9
 * Time: 下午9:21
 */
$(".form-group").each(function(i,t){
    var t=$(t) ;
    $(t).find("input").blur(function(){
        if($(this).val()==""){
            t.addClass("has-error");
        }else{
            t.addClass("has-success").removeClass('has-error');
        }
    });
});
$("#btn").click(function(){
    if($("#inputPassword4").val() != "" && $("#inputPassword3").val() != "" && $("#inputEmail3").val() != "" && $("#inputName1").val() != ""){
        $.post('/registration',function(data){
            console.log(data);
        });
        return false;
    }else{
        alert("HI!,你的信息没输入全吧！");
        return false;
    }
});
