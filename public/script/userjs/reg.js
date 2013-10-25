/**
 * Created with WebStorm.
 * User: RD-小小WEB
 * Date: 13-10-9
 * Time: 下午9:21
 */

/*校验状态*/
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

/*post提交*/
$("#btn").click(function(){
    var email=$("#inputEmail").val(),
        password1=$("#inputPassword1").val(),
        password2=$("#inputPassword2").val(),
        name=$("#inputName").val();
    if(email != "" && password1 != "" && password2 != "" && name != ""){
      $("#btn").button('loading');
      $.ajax({
        url:'/regist',
        type:'post',
        data:{
          email:email,
          password1:password1,
          password2:password2,
          username:name
        },
        dataType:'json',
        success:function(data){
            $('#myModal').find('.modal-body').html(data.msg);
            $('#myModal').modal();
            $("#btn").button('reset');
            if(data.suc){
                $("#myModal").find(".close,.btn").one("click",function(){
                    document.location.href="./";
                });
            }
        },
        error:function(){
            $("#myModal").find('.modal-body').html('发送失败');
            $('#myModal').modal();
            $("#btn").button('reset');
        }
      });
    }else{
        $('#myModal').find('.modal-body').html("HI!,亲！有些东西是不能少的");
        $('#myModal').modal();
    }
});
