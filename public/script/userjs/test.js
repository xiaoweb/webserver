/**
 * Created with WebStorm.
 * User: RD-小小WEB
 * Date: 13-10-15
 * Time: 下午2:31
 * To change this template use File | Settings | File Templates.
 */
var name = localStorage.username;
if(!name){
    name = prompt("你的名字叫什么");
    localStorage.username = name;
}

for(var names in localStorage){
    var value = localStorage[names];
}