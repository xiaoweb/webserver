/*
Copyright 2013, KISSY v1.40dev
MIT Licensed
build time: Oct 25 12:57
*/
KISSY.add("scroll-view/plugin/scrollbar/scrollbar-xtpl",function(){return function(d,b,h){var b=this.config.utils,g=b.getExpression,e=b.getPropertyOrRunCommand,b='<div id="ks-scrollbar-arrow-up-',c=e(this,d,{},"id",0,1,h,!1),b=b+g(c,!0),b=b+'"\r\n        class="',c={},a=[],f=e(this,d,{},"axis",0,2,h,!0);a.push(f+"-arrow-up");c.params=a;c=e(this,d,c,"getBaseCssClasses",0,2,!0,h);b=b+c+'">\r\n    <a href="javascript:void(\'up\')">up</a>\r\n</div>\r\n<div id="ks-scrollbar-arrow-down-';c=e(this,d,{},
"id",0,5,h,!1);b+=g(c,!0);b+='"\r\n        class="';c={};a=[];f=e(this,d,{},"axis",0,6,h,!0);a.push(f+"-arrow-down");c.params=a;c=e(this,d,c,"getBaseCssClasses",0,6,!0,h);b=b+c+'">\r\n    <a href="javascript:void(\'down\')">down</a>\r\n</div>\r\n<div id="ks-scrollbar-track-';c=e(this,d,{},"id",0,9,h,!1);b+=g(c,!0);b+='"\r\n     class="';c={};a=[];f=e(this,d,{},"axis",0,10,h,!0);a.push(f+"-track");c.params=a;c=e(this,d,c,"getBaseCssClasses",0,10,!0,h);b=b+c+'">\r\n<div id="ks-scrollbar-drag-';c=e(this,
d,{},"id",0,11,h,!1);b+=g(c,!0);b+='"\r\n     class="';g={};c=[];a=e(this,d,{},"axis",0,12,h,!0);c.push(a+"-drag");g.params=c;g=e(this,d,g,"getBaseCssClasses",0,12,!0,h);b=b+g+'">\r\n<div class="';g={};c=[];a=e(this,d,{},"axis",0,13,h,!0);c.push(a+"-drag-top");g.params=c;g=e(this,d,g,"getBaseCssClasses",0,13,!0,h);b=b+g+'">\r\n</div>\r\n<div class="';g={};c=[];a=e(this,d,{},"axis",0,15,h,!0);c.push(a+"-drag-center");g.params=c;g=e(this,d,g,"getBaseCssClasses",0,15,!0,h);b=b+g+'">\r\n</div>\r\n<div class="';
g={};c=[];a=e(this,d,{},"axis",0,17,h,!0);c.push(a+"-drag-bottom");g.params=c;d=e(this,d,g,"getBaseCssClasses",0,17,!0,h);return b+d+'">\r\n</div>\r\n</div>\r\n</div>'}});
KISSY.add("scroll-view/plugin/scrollbar/render",function(d,b,h){var g=d.Features.isTransformSupported(),e={beforeCreateDom:function(a,f){a.elCls.push(a.prefixCls+"scrollbar-"+a.axis);d.mix(f,{dragEl:"#ks-scrollbar-drag-{id}",downBtn:"#ks-scrollbar-arrow-down-{id}",upBtn:"#ks-scrollbar-arrow-up-{id}",trackEl:"#ks-scrollbar-track-{id}"})},createDom:function(){var a=this.control;a.$dragEl=a.get("dragEl");a.$trackEl=a.get("trackEl");a.$downBtn=a.get("downBtn");a.$upBtn=a.get("upBtn");a.dragEl=a.$dragEl[0];
a.trackEl=a.$trackEl[0];a.downBtn=a.$downBtn[0];a.upBtn=a.$upBtn[0]},syncUI:function(){var a=this.control,f=a.get("scrollView"),b=a.trackEl,c=a.scrollWHProperty,d=a.whProperty,e=a.clientWHProperty,g=a.dragWHProperty;a.get("rendered");a.scrollView=f;f.allowScroll[a.scrollType]?(a.scrollLength=f[c],b=a.trackElSize="width"==d?b.offsetWidth:b.offsetHeight,f=f[e]/a.scrollLength,f*=b,a.set(g,f),a.barSize=f,this.syncOnScrollChange(),a.set("visible",!0)):a.set("visible",!1)},syncOnScrollChange:function(){var a=
this.control,f=a.scrollType,b=a.scrollView,c=a.dragLTProperty,d=a.dragWHProperty,e=a.trackElSize,g=a.barSize,h=a.scrollLength,i=b.get(a.scrollProperty),j=b.minScroll[f],f=b.maxScroll[f];i>f?(e*=f/h,a.set(d,g-(i-f)),a.set(c,e+g-a.get(d))):i<j?(e*=j/h,a.set(d,g-(j-i)),a.set(c,e)):(a.set(c,i/h*e),a.set(d,g))},_onSetDragHeight:function(a){this.control.dragEl.style.height=a+"px"},_onSetDragWidth:function(a){this.control.dragEl.style.width=a+"px"},_onSetDragLeft:function(a){this.control.dragEl.style.left=
a+"px"},_onSetDragTop:function(a){this.control.dragEl.style.top=a+"px"}},c=d.Features.getTransformProperty();g&&(e._onSetDragLeft=function(a){this.control.dragEl.style[c]="translateX("+a+"px) translateZ(0)"},e._onSetDragTop=function(a){this.control.dragEl.style[c]="translateY("+a+"px) translateZ(0)"});return b.getDefaultRender().extend(e,{ATTRS:{contentTpl:{value:h}}})},{requires:["component/control","./scrollbar-xtpl"]});
KISSY.add("scroll-view/plugin/scrollbar/control",function(d,b,h,g){var e=b.Gesture,b=d.Features,c=!b.isTouchEventSupported()&&!b.isMsPointerSupported();return h.extend({initializer:function(){var a=this.scrollType="x"==this.get("axis")?"left":"top",f=d.ucfirst(a);this.pageXyProperty="left"==a?"pageX":"pageY";a=this.whProperty="left"==a?"width":"height";a=d.ucfirst(a);this.afterScrollChangeEvent="afterScroll"+f+"Change";this.scrollProperty="scroll"+f;this.dragWHProperty="drag"+a;this.dragLTProperty=
"drag"+f;this.clientWHProperty="client"+a;this.scrollWHProperty="scroll"+a},bindUI:function(){var a=this,f=a.get("autoHide"),b=a.get("scrollView");f?a.hideFn=d.bind(a.hide,a):(d.each([a.$downBtn,a.$upBtn],function(b){b.on(e.start,a.onUpDownBtnMouseDown,a).on(e.end,a.onUpDownBtnMouseUp,a)}),a.$trackEl.on(e.start,a.onTrackElMouseDown,a),c&&d.use("dd",function(b,f){a.dd=(new f.Draggable({node:a.$dragEl,disabled:a.get("disabled"),groups:!1,halt:!0})).on("drag",a.onDrag,a).on("dragstart",a.onDragStart,
a)}));b.on(a.afterScrollChangeEvent+".ks-scrollbar",a.afterScrollChange,a).on("scrollEnd.ks-scrollbar",a.onScrollEnd,a).on("afterDisabledChange",a.onScrollViewDisabled,a)},destructor:function(){this.get("scrollView").detach(".ks-scrollbar");this.clearHideTimer()},onScrollViewDisabled:function(a){this.set("disabled",a.newVal)},onDragStart:function(){var a=this.scrollView;this.startMousePos=this.dd.get("startMousePos")[this.scrollType];this.startScroll=a.get(this.scrollProperty)},onDrag:function(a){var b=
this.scrollView,c={};c[this.scrollType]=this.startScroll+(a[this.pageXyProperty]-this.startMousePos)/this.trackElSize*this.scrollLength;b.scrollToWithBounds(c)},startHideTimer:function(){this.clearHideTimer();this.hideTimer=setTimeout(this.hideFn,1E3*this.get("hideDelay"))},clearHideTimer:function(){this.hideTimer&&(clearTimeout(this.hideTimer),this.hideTimer=null)},onUpDownBtnMouseDown:function(a){function b(){var a={};a[d]=c.get(e)+h*g;c.scrollToWithBounds(a)}if(!this.get("disabled")){a.halt();
var c=this.scrollView,e=this.scrollProperty,d=this.scrollType,g=c.getScrollStep()[this.scrollType],a=a.target,h=a==this.downBtn||this.$downBtn.contains(a)?1:-1;clearInterval(this.mouseInterval);this.mouseInterval=setInterval(b,100);b()}},onTrackElMouseDown:function(a){if(!this.get("disabled")){var b=a.target,c=this.$dragEl;if(!(this.dragEl==b||c.contains(b))){var b=this.scrollType,c=this.scrollView,e=Math.max(0,(a[this.pageXyProperty]-this.$trackEl.offset()[b]-this.barSize/2)/this.trackElSize),d=
{};d[b]=e*this.scrollLength;c.scrollToWithBounds(d);a.halt()}}},onUpDownBtnMouseUp:function(){clearInterval(this.mouseInterval)},onScrollEnd:function(){this.hideFn&&this.startHideTimer()},afterScrollChange:function(){var a=this.scrollView;a.allowScroll[this.scrollType]&&(this.clearHideTimer(),this.set("visible",!0),this.hideFn&&!a.isScrolling&&this.startHideTimer(),this.view.syncOnScrollChange())},_onSetDisabled:function(a){this.dd&&this.dd.set("disabled",a)}},{ATTRS:{minLength:{value:20},scrollView:{},
axis:{view:1},autoHide:{value:d.UA.ios},visible:{valueFn:function(){return!this.get("autoHide")}},hideDelay:{value:0.1},dragWidth:{setter:function(a){var b=this.get("minLength");return a<b?b:a},view:1},dragHeight:{setter:function(a){var b=this.get("minLength");return a<b?b:a},view:1},dragLeft:{view:1},dragTop:{view:1},dragEl:{},downBtn:{},upBtn:{},trackEl:{},focusable:{value:!1},xrender:{value:g}},xclass:"scrollbar"})},{requires:["node","component/control","./render"]});
KISSY.add("scroll-view/plugin/scrollbar",function(d,b,h){return b.extend({pluginId:this.getName(),pluginSyncUI:function(b){var e=this.get("minLength"),c=this.get("autoHideX"),a=this.get("autoHideY"),f={scrollView:b,elBefore:b.$contentEl};void 0!==e&&(f.minLength=e);this.scrollBarX?this.scrollBarX.sync():b.allowScroll.left&&(e={axis:"x"},void 0!==c&&(f.autoHide=c),this.scrollBarX=(new h(d.merge(f,e))).render());this.scrollBarY?this.scrollBarY.sync():b.allowScroll.top&&(e={axis:"y"},void 0!==a&&(f.autoHide=
a),this.scrollBarY=(new h(d.merge(f,e))).render())},pluginDestructor:function(){this.scrollBarX&&(this.scrollBarX.destroy(),this.scrollBarX=null);this.scrollBarY&&(this.scrollBarY.destroy(),this.scrollBarY=null)}},{ATTRS:{minLength:{},autoHideX:{},autoHideY:{}}})},{requires:["base","./scrollbar/control"]});