/**
 * Created with JetBrains WebStorm.
 * User: RD-小小WEB
 * Date: 13-9-11
 * Time: 上午10:25
 * To change this template use File | Settings | File Templates.
 */
$(function () {
    var slide = document.getElementById("slide"),
        ul = $(slide).find("ul"),
        li = $(slide).find("li"),
        start = 1,settimes;
    for (var i = 0; i < li.length; i++) {
        $("#slide_index").append("<div class='defd'></div>").find("div").eq(0).removeClass("defd");

    }
    function slideico(index,fn) {
        $("#slide_index div").eq(index).removeClass("defd").siblings().addClass("defd");
        if(fn){
            fn();
        }
    }

    function slideto() {
        var parent = $("#slide").find("li").parent();
        var left = parseInt(parent.css("left"));
        if (left * -1 >= ul.width() - li.width()) {
            parent.animate({"left": "0px"});
            start=0;
            slideico(start);
        } else {
            parent.animate({"left": left - li.width() + "px"});
            start++;
        }

    }

    ul.width(li.length * li.width());

    li.on({'swipeleft': function () {
        clearInterval(settimes);
        var index = $(this).index()+1;
        slideto();
        start=index;
        slideico(index,function(){
            settimes=setTime();
        });
    },
        "swiperight": function () {
            clearInterval(settimes);
            var parent = $(this).parent();
            var left = parseInt(parent.css("left"));
            var index = $(this).index()-1;
            if (left >= 0) {
                parent.animate({"left": "-" + (ul.width() - li.width()) + "px"});
            } else {
                parent.animate({"left": left + li.width() + "px"});
            }
            if(index<0){
                start=li.length-1;
                slideico(start,function(){
                    settimes=setTime();
                });
            }else{
                slideico(index,function(){
                    settimes=setTime();
                });
                start--;
            }
        }
    });

    function setTime(){
        var setTime=setInterval(function () {
            slideto();
            if(start>=li.length){
                start=0;
            }
            slideico(start);
        }, 2000);
        return setTime;
    }
    settimes=setTime();
});