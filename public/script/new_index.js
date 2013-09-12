/**
 * Created with JetBrains WebStorm.
 * User: RD-小小WEB
 * Date: 13-9-11
 * Time: 上午10:25
 * To change this template use File | Settings | File Templates.
 */
$(function() {
    var slide=document.getElementById("slide"),
        ul=$(slide).find("ul"),
        li=$(slide).find("li"),
        start=0,end=0,scroll=false;
    function slideto(){
        var parent=$("#slide").find("li").parent();
        var left=parseInt(parent.css("left"));
        if(left * -1>=ul.width()-li.width()){
            parent.animate({"left":"0px"});
        }else{
            parent.animate({"left":left-li.width()+"px"});
        }
    }

    ul.width(li.length*li.width());

    li.on({'swipeleft':function(){
        slideto();
    },
        "swiperight":function(){
            var parent=$(this).parent();
            var left=parseInt(parent.css("left"));
            if(left >=0){
                parent.animate({"left":"-"+(ul.width()-li.width())+"px"});
            }else{
                parent.animate({"left":left+li.width()+"px"});
            }
        }
    });
    setInterval(function(){
        slideto();
    },3000);
});