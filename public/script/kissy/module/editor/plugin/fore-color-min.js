/*
Copyright 2013, KISSY v1.40dev
MIT Licensed
build time: Oct 25 16:43
*/
KISSY.add("editor/plugin/fore-color",function(c,f,d,e){function b(a){this.config=a||{}}c.augment(b,{pluginRenderUI:function(a){e.init(a);d.init(a,{cmdType:"foreColor",defaultColor:"rgb(204, 0, 0)",tooltip:"\u6587\u672c\u989c\u8272"})}});return b},{requires:["editor","./color/btn","./fore-color/cmd"]});