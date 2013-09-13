/*
Copyright 2013, KISSY UI Library v1.31
MIT Licensed
build time: Aug 15 00:00
*/
KISSY.add("calendar/base",function(f,h,m,j){function e(d,g){this._init(d,g)}var b=f.DOM,a=f.UA,c=h.all;f.augment(e,m.Target,{_init:function(d,g){var a=c(d);this.id=this._stamp(a);this._buildParam(g);this.popup?(this.trigger=a,this.con=new h("<div>"),c(document.body).append(this.con),this.con.css({top:"0px",position:"absolute",background:"white",visibility:"hidden","z-index":99999999})):this.con=a;this.C_Id=this._stamp(this.con);this.render();this._buildEvent();return this},render:function(d){var g=
0,b,k,d=d||{};this._parseParam(d);this.con.addClass("ks-cal-call ks-clearfix ks-cal-call-multi-"+this.pages);this.ca=this.ca||[];for(g=0;g<this.ca.length;g++)this.ca[g].detachEvent();this.__shimEl&&(this.__shimEl.remove(),delete this.__shimEl);this.con.empty();this.ca.length=this.pages;var i=!1,c=!1;this.range&&(this.range.start&&(i=!0),this.range.end&&(c=!0));k=i&&!this.rangeLinkage?[this.range.start.getFullYear(),this.range.start.getMonth()]:[this.year,this.month];for(g=0;g<this.pages;g++){0===
g?(i&&(this._time=f.clone(this.range.start)),d=!0):this.rangeLinkage?(c&&(this._time=f.clone(this.range.end)),d=!1,k=this._computeNextMonth(k)):(c&&(this._time=f.clone(this.range.end)),d=!0,k=c&&g+1==this.pages?[this.range.end.getFullYear(),this.range.end.getMonth()]:this._computeNextMonth(k));b=this.rangeLinkage?g==this.pages-1:!0;var e=this.ca[g];if(!this.rangeLinkage&&e&&(e.year!=k[0]||e.month!=k[1]))k=[e.year,e.month];this.ca[g]=new this.Page({year:k[0],month:k[1],prevArrow:d,nextArrow:b,showTime:this.showTime},
this);this.ca[g].render()}this.popup&&6===a.ie&&(this.__shimEl=new h("<iframe frameBorder='0' style='position: absolute;border: none;width: expression(this.parentNode.offsetWidth-3);top: 0;left: 0;z-index: 0;height: expression(this.parentNode.offsetHeight-3);'></iframe>"),this.con.prepend(this.__shimEl));return this},destroy:function(){for(var d=0;d<this.ca.length;d++)this.ca[d].detachEvent();f.each(this.EV,function(d){d&&d.target.detach(d.type,d.fn)});this.con.remove()},_stamp:function(d){d.attr("id")||
d.attr("id",f.guid("K_Calendar"));return d.attr("id")},_buildEvent:function(){var d=this,a,b;if(!d.popup)return this;f.each(d.EV,function(a){a&&a.target.detach(a.type,a.fn)});d.EV=d.EV||[];a=d.EV[0]={target:c(document),type:"click"};a.fn=function(a){var b=c(a.target);b.attr("id")===d.C_Id||(b.hasClass("ks-next")||b.hasClass("ks-prev"))&&"A"===b[0].tagName||b.attr("id")==d.id||"hidden"==d.con.css("visibility")||d.con.contains(b)&&("option"===b[0].nodeName.toLowerCase()||"select"===b[0].nodeName.toLowerCase())||
(a=[a.pageX,a.pageY],b=[{x:d.con.offset().left,y:d.con.offset().top},{x:d.con.offset().left+d.con.width(),y:d.con.offset().top+d.con.height()}],a[0]>b[0].x&&a[0]<b[1].x&&a[1]>b[0].y&&a[1]<b[1].y||d.hide())};a.target.on(a.type,a.fn);for(b=0;b<d.triggerType.length;b++)a=d.EV[b+1]={target:c("#"+d.id),type:d.triggerType[b],fn:function(a){a.target=c(a.target);a.preventDefault();var b=d.triggerType;f.inArray("click",b)&&f.inArray("focus",b)?"focus"==a.type&&d.toggle():f.inArray("click",b)&&!f.inArray("focus",
b)?"click"==a.type&&d.toggle():!f.inArray("click",b)&&f.inArray("focus",b)?setTimeout(function(){d.toggle()},170):d.toggle()}},a.target.on(a.type,a.fn);return this},__getAlignOffset:function(a,g){var l=g.charAt(0),k=g.charAt(1),i,c,e,f;a?(a=h.one(a),i=a.offset(),c=a.outerWidth(),e=a.outerHeight()):(i={left:b.scrollLeft(),top:b.scrollTop()},c=b.viewportWidth(),e=b.viewportHeight());f=i.left;i=i.top;"c"===l?i+=e/2:"b"===l&&(i+=e);"c"===k?f+=c/2:"r"===k&&(f+=c);return{left:f,top:i}},toggle:function(){"hidden"==
this.con.css("visibility")?this.show():this.hide()},show:function(){this.con.css("visibility","");var a=this.align.points,b=this.align.offset||[0,0],l=this.con.offset(),c=this.__getAlignOffset(this.trigger,a[0]),a=this.__getAlignOffset(this.con,a[1]),c=[a.left-c.left,a.top-c.top],a=l.top-c[1]+b[1];this.con.css("left",(l.left-c[0]+b[0]).toString()+"px");this.con.css("top",a.toString()+"px");this.fire("show");return this},hide:function(){this.con.css("visibility","hidden");this.fire("hide");return this},
_buildParam:function(a){var b=this;if(a===j||null===a)a={};f.each({date:new Date,selected:null,startDay:0,pages:1,closable:!1,rangeSelect:!1,minDate:!1,maxDate:!1,multiSelect:!1,multi:null,navigator:!0,popup:!1,showTime:!1,triggerType:["click"],disabled:null,range:null,rangeLinkage:!0,align:{points:["bl","tl"],offset:[0,0]},notLimited:!1},function(l,c){var i=a[c];b[c]=i===j||null===i?l:i});return this},_parseParam:function(a){var b;if(a===j||null===a)a={};for(b in a)this[b]=a[b];"string"===typeof this.triggerType&&
(this.triggerType=[this.triggerType]);this.startDay%=7;0>this.startDay&&(this.startDay+=7);this.EV=[];this._handleDate();if(this.multiSelect&&(this.rangeSelect=!1,this.selected=this.range=null,this.multi))for(b=0;b<this.multi.length;b++)this.multi[b]instanceof Date&&(this.multi[b]=this._handleDate2String(this.multi[b]));return this},_templetShow:function(a,b){var c,e,i,f;if(b instanceof Array){c="";for(e=0;e<b.length;e++)c+=arguments.callee(a,b[e]);a=c}else if(c=a.match(/{\$(.*?)}/g),b!==j&&null!==
c){e=0;for(i=c.length;e<i;e++)f=c[e].replace(/({\$)|}/g,""),f=b[f]!==j?b[f]:"",a=a.replace(c[e],f)}return a},_handleDate:function(){var a=this.date;this.weekday=a.getDay()+1;this.day=a.getDate();this.month=a.getMonth();this.year=a.getFullYear();return this},_handleDate2String:function(a){var b=a.getFullYear(),c=a.getMonth(),a=a.getDate();return b+"-"+(8<c?c+1:"0"+(c+1))+"-"+(9<a?a:"0"+a)},_handleString2Date:function(a){a=a.toString().split("-");if(3==a.length&&(a=new Date(parseInt(a[0],10),parseInt(a[1],
10)-1,parseInt(a[2],10)),a instanceof Date&&"Invalid Date"!=a&&!isNaN(a)))return a},_getHeadStr:function(a,b){return a.toString()+"\u5e74"+(Number(b)+1).toString()+"\u6708"},_monthAdd:function(){11==this.month?(this.year++,this.month=0):this.month++;this.date=new Date(this.year.toString()+"/"+(this.month+1).toString()+"/1");return this},_monthMinus:function(){0===this.month?(this.year--,this.month=11):this.month--;this.date=new Date(this.year.toString()+"/"+(this.month+1).toString()+"/1");return this},_yearAdd:function(){this.year++;
this.date=new Date(this.year.toString()+"/"+(this.month+1).toString()+"/1");return this},_yearMinus:function(){this.year--;this.date=new Date(this.year.toString()+"/"+(this.month+1).toString()+"/1");return this},_computeNextMonth:function(a){var b=a[0],a=a[1];11==a?(b++,a=0):a++;return[b,a]},_handleOffset:function(){for(var a="\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","),b=this.startDay,c="",c=[],e=0;7>e;e++)c[e]={day:a[(e+b)%7]};c=this._templetShow("<span>{$day}</span>",c);return{day_html:c}},_handleRange:function(a){this.range=
this.range||{start:null,end:null};null===this.range.start&&null===this.range.end||null!==this.range.start&&null!==this.range.end?(this.range.start=a,this.range.end=null):null!==this.range.start&&null===this.range.end&&(this.range.end=a,this.range.start.getTime()>this.range.end.getTime()&&(a=this.range.start,this.range.start=this.range.end,this.range.end=a),this.fire("rangeSelect",this.range),this.popup&&this.closable&&this.hide());return this},_handleMultiSelectStart:function(a){this.multiStart=a},
_handleMultiSelectEnd:function(a){if(this.multiStart){this.multi=this.multi||[];a<this.multiStart?(this.multiEnd=this.multiStart,this.multiStart=a):this.multiEnd=a;this.minDate&&this.multiStart<this.minDate&&(this.multiStart=new Date(this.minDate.getFullYear(),this.minDate.getMonth(),this.minDate.getDate()));this.maxDate&&this.multiEnd>this.maxDate&&(this.multiEnd=new Date(this.maxDate.getFullYear(),this.maxDate.getMonth(),this.maxDate.getDate()));for(;this.multiStart<=this.multiEnd;){a=!1;if(this.disabled&&
0<this.disabled.length)for(var b=0;b<this.disabled.length;b++)if(this.disabled[b].getTime()==this.multiStart.getTime()){a=!0;break}a||(a=this._handleDate2String(this.multiStart),f.inArray(a,this.multi)?this.multi.splice(f.indexOf(a,this.multi),1):this.multi.push(a),this.multiStart.setDate(this.multiStart.getDate()+1))}this.multiStart=null;this.render()}},_handleMultiSelect:function(){this.multi=this.multi||[];this.multi.sort(function(a,b){return a>b?1:-1});for(var a=0;a<this.multi.length;a++)this.multi[a]=
this._handleString2Date(this.multi[a]);this.fire("multiSelect",{multi:this.multi});this.popup&&this.closable&&this.hide()}});return e},{requires:["node","event"]});KISSY.add("calendar",function(f,h,m,j,e){f.Date=h.Date=e;return f.Calendar=h},{requires:["calendar/base","calendar/page","calendar/time","calendar/date"]});
KISSY.add("calendar/date",function(){function f(f,j){var e=null,j=j||"-";if(e instanceof Date)return e;e=new Date(f);if(e instanceof Date&&"Invalid Date"!=e&&!isNaN(e))return e;e=f.toString().split(j);return 3==e.length&&(e=new Date(e[0],parseInt(e[1],10)-1,e[2]),e instanceof Date&&"Invalid Date"!=e&&!isNaN(e))?e:null}var h=function(){var f=/w{1}|d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,j=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
e=/[^-+\dA-Z]/g,b=function(a,b){a=""+a;for(b=b||2;a.length<b;)a="0"+a;return a},a={"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUTCDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",localShortDate:"yy\u5e74mm\u6708dd\u65e5",localShortDateTime:"yy\u5e74mm\u6708dd\u65e5 hh:MM:ss TT",localLongDate:"yyyy\u5e74mm\u6708dd\u65e5",localLongDateTime:"yyyy\u5e74mm\u6708dd\u65e5 hh:MM:ss TT",
localFullDate:"yyyy\u5e74mm\u6708dd\u65e5 w",localFullDateTime:"yyyy\u5e74mm\u6708dd\u65e5 w hh:MM:ss TT"},c="Sun,Mon,Tue,Wed,Thu,Fri,Sat,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,\u661f\u671f\u65e5,\u661f\u671f\u4e00,\u661f\u671f\u4e8c,\u661f\u671f\u4e09,\u661f\u671f\u56db,\u661f\u671f\u4e94,\u661f\u671f\u516d".split(","),d="Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec,January,February,March,April,May,June,July,August,September,October,November,December".split(",");return function(g,l,k){1==arguments.length&&"[object String]"==Object.prototype.toString.call(g)&&!/\d/.test(g)&&(l=g,g=void 0);g=g?new Date(g):new Date;
if(isNaN(g))throw SyntaxError("invalid date");l=""+(a[l]||l||a["default"]);"UTC:"==l.slice(0,4)&&(l=l.slice(4),k=!0);var i=k?"getUTC":"get",h=g[i+"Date"](),p=g[i+"Day"](),o=g[i+"Month"](),r=g[i+"FullYear"](),n=g[i+"Hours"](),s=g[i+"Minutes"](),t=g[i+"Seconds"](),i=g[i+"Milliseconds"](),q=k?0:g.getTimezoneOffset(),u={d:h,dd:b(h,void 0),ddd:c[p],dddd:c[p+7],w:c[p+14],m:o+1,mm:b(o+1,void 0),mmm:d[o],mmmm:d[o+12],yy:(""+r).slice(2),yyyy:r,h:n%12||12,hh:b(n%12||12,void 0),H:n,HH:b(n,void 0),M:s,MM:b(s,
void 0),s:t,ss:b(t,void 0),l:b(i,3),L:b(99<i?Math.round(i/10):i,void 0),t:12>n?"a":"p",tt:12>n?"am":"pm",T:12>n?"A":"P",TT:12>n?"AM":"PM",Z:k?"UTC":((""+g).match(j)||[""]).pop().replace(e,""),o:(0<q?"-":"+")+b(100*Math.floor(Math.abs(q)/60)+Math.abs(q)%60,4),S:["th","st","nd","rd"][3<h%10?0:(10!=h%100-h%10)*h%10]};return l.replace(f,function(a){return a in u?u[a]:a.slice(1,a.length-1)})}}();return{format:function(f,j,e){return h(f,j,e)},parse:function(h,j){return f(h,j)}}});
KISSY.add("calendar/page",function(f,h,m){f.augment(m,{Page:function(j,e){this.father=e;this.month=Number(j.month);this.year=Number(j.year);this.prevArrow=j.prevArrow;this.nextArrow=j.nextArrow;this.timmer=this.node=null;this.id="";this.html=['<div class="ks-cal-box" id="{$id}"><div class="ks-cal-hd"><a href="javascript:void(0);" class="ks-prev-year {$prev}"><</a><a href="javascript:void(0);" class="ks-prev-month {$prev}"><</a><a href="javascript:void(0);" class="ks-title">{$title}</a><a href="javascript:void(0);" class="ks-next-month {$next}">></a><a href="javascript:void(0);" class="ks-next-year {$next}">></a></div><div class="ks-cal-bd"><div class="ks-whd">',
e._handleOffset().day_html,'</div><div class="ks-dbd ks-clearfix">{$ds}<div style="clear:both;"></div></div></div><div class="ks-setime hidden"></div><div class="{$notlimited}"><a href="#" class="ks-cal-notLimited {$notlimitedCls}">\u4e0d\u9650</a></div><div class="ks-multi-select {$multiSelect}"><button class="ks-multi-select-btn">\u786e\u5b9a</button></div><div class="ks-cal-ft {$showtime}"><div class="ks-cal-time">\u65f6\u95f4\uff1a00:00 &hearts;</div></div><div class="ks-selectime hidden"></div></div><\!--#ks-cal-box--\>'].join("");
this.nav_html='<p>\u6708<select value="{$the_month}"><option class="m1" value="1">01</option><option class="m2" value="2">02</option><option class="m3" value="3">03</option><option class="m4" value="4">04</option><option class="m5" value="5">05</option><option class="m6" value="6">06</option><option class="m7" value="7">07</option><option class="m8" value="8">08</option><option class="m9" value="9">09</option><option class="m10" value="10">10</option><option class="m11" value="11">11</option><option class="m12" value="12">12</option></select></p><p>\u5e74<input type="text" value="{$the_year}" onfocus="this.select()"/></p><p><button class="ok">\u786e\u5b9a</button><button class="cancel">\u53d6\u6d88</button></p>';
this.Verify=function(){return{isDay:function(b){if(!/^\d+$/i.test(b))return!1;b=Number(b);return!(1>b||31<b)},isYear:function(b){if(!/^\d+$/i.test(b))return!1;b=Number(b);return!(100>b||1E4<b)},isMonth:function(b){if(!/^\d+$/i.test(b))return!1;b=Number(b);return!(1>b||12<b)}}};this._renderUI=function(){var b={};this.HTML="";b.prev="";b.next="";b.title="";b.ds="";b.notlimited="";b.notlimitedClass="";this.prevArrow||(b.prev="hidden");this.nextArrow||(b.next="hidden");this.father.showTime||(b.showtime=
"hidden");this.father.notLimited||(b.notlimited="hidden");this.father.multiSelect||(b.multiSelect="hidden");this.father.showTime&&this.father.notLimited&&(b.notlimitedCls="ks-cal-notLimited-showTime");this.father.notLimited&&!this.father.selected&&(b.notlimitedCls+=" ks-cal-notLimited-selected");b.id=this.id="ks-cal-"+Math.random().toString().replace(/.\./i,"");b.title=this.father._getHeadStr(this.year,this.month);this.createDS();b.ds=this.ds;this.father.con.append(this.father._templetShow(this.html,
b));this.node=h.one("#"+this.id);this.father.showTime&&(b=this.node.one(".ks-cal-ft"),this.timmer=new this.father.TimeSelector(b,this.father));return this};this.detachEvent=function(){this.EV=this.EV||[];f.each(this.EV,function(b){b&&b.target.detach(b.type,b.fn)})};this._buildEvent=function(){function b(){c.target.on(c.type,c.fn)}var a=this,c,d=h.one("#"+a.id);a.EV=[];a.father.multiSelect||(c=a.EV[a.EV.length]={target:d.one("div.ks-dbd"),type:"click",fn:function(b){b.preventDefault();"A"==b.target.tagName&&
(b.target=h(b.target),!b.target.hasClass("ks-null")&&!b.target.hasClass("ks-disabled")&&(b=new Date(a.year,a.month,Number(b.target.html())),a.father.dt_date=b,a.father.fire("select",{date:b}),a.father.popup&&a.father.closable&&!a.father.showTime&&!a.father.rangeSelect&&a.father.hide(),a.father.rangeSelect&&(a.timmer&&(b.setHours(a.timmer.get("h")),b.setMinutes(a.timmer.get("m")),b.setSeconds(a.timmer.get("s"))),a.father._handleRange(b)),a.father.render({selected:b})))}},b());c=a.EV[a.EV.length]={target:d.one("a.ks-prev-month"),
type:"click",fn:function(b){b.preventDefault();a.father.rangeLinkage||a._monthMinus();a.father._monthMinus().render();a.father.fire("monthChange",{date:new Date(a.father.year+"/"+(a.father.month+1)+"/01")})}};b();c=a.EV[a.EV.length]={target:d.one("a.ks-next-month"),type:"click",fn:function(b){b.preventDefault();a.father.rangeLinkage||a._monthAdd();a.father._monthAdd().render();a.father.fire("monthChange",{date:new Date(a.father.year+"/"+(a.father.month+1)+"/01")})}};b();c=a.EV[a.EV.length]={target:d.one("a.ks-prev-year"),
type:"click",fn:function(b){b.preventDefault();a.father.rangeLinkage||a._yearMinus();a.father._yearMinus().render();a.father.fire("monthChange",{date:new Date(a.father.year+"/"+(a.father.month+1)+"/01")})}};b();c=a.EV[a.EV.length]={target:d.one("a.ks-next-year"),type:"click",fn:function(b){b.preventDefault();a.father.rangeLinkage||a._yearAdd();a.father._yearAdd().render();a.father.fire("monthChange",{date:new Date(a.father.year+"/"+(a.father.month+1)+"/01")})}};b();a.father.navigator&&(c=a.EV[a.EV.length]=
{target:d.one("a.ks-title"),type:"click",fn:function(b){try{a.timmer.hidePopup();b.preventDefault()}catch(c){}b.target=h(b.target);b=d.one(".ks-setime");b.html("");var e=a.father._templetShow(a.nav_html,{the_month:a.month+1,the_year:a.year});b.html(e);b.removeClass("hidden");d.one("input").on("keydown",function(b){b.target=h(b.target);if(b.keyCode==38){b.target.val(Number(b.target.val())+1);b.target[0].select()}if(b.keyCode==40){b.target.val(Number(b.target.val())-1);b.target[0].select()}if(b.keyCode==
13){var b=d.one(".ks-setime").one("select").val(),c=d.one(".ks-setime").one("input").val();d.one(".ks-setime").addClass("hidden");if(a.Verify().isYear(c)&&a.Verify().isMonth(b)){a.father.render({date:new Date(c+"/"+b+"/01")});a.father.fire("monthChange",{date:new Date(c+"/"+b+"/01")})}}})}},b(),c=a.EV[a.EV.length]={target:d.one(".ks-setime"),type:"click",fn:function(b){b.preventDefault();b.target=h(b.target);if(b.target.hasClass("ok")){var b=d.one(".ks-setime").one("select").val(),c=d.one(".ks-setime").one("input").val();
d.one(".ks-setime").addClass("hidden");if(a.Verify().isYear(c)&&a.Verify().isMonth(b)){a.father.render({date:new Date(c+"/"+b+"/01")});a.father.fire("monthChange",{date:new Date(c+"/"+b+"/01")})}}else b.target.hasClass("cancel")&&d.one(".ks-setime").addClass("hidden")}},b());a.father.notLimited&&(c=a.EV[a.EV.length]={target:d.one(".ks-cal-notLimited"),type:"click",fn:function(b){b.preventDefault();a.father.range={start:null,end:null};a.father.fire("select",{date:null});a.father.popup&&a.father.closable&&
a.father.hide();a.father.render({selected:null})}},b());a.father.multiSelect&&(c=a.EV[a.EV.length]={target:d.one("div.ks-dbd"),type:"mousedown",fn:function(b){b.preventDefault();if(b.target.tagName=="A"){b.target=h(b.target);if(!b.target.hasClass("ks-null")&&!b.target.hasClass("ks-disabled")){b=new Date(a.year,a.month,Number(b.target.html()));a.father._handleMultiSelectStart(b)}}}},b(),c=a.EV[a.EV.length]={target:d.one("div.ks-dbd"),type:"mouseup",fn:function(b){b.preventDefault();if(b.target.tagName==
"A"){b.target=h(b.target);if(!b.target.hasClass("ks-null")&&!b.target.hasClass("ks-disabled")){b=new Date(a.year,a.month,Number(b.target.html()));a.father._handleMultiSelectEnd(b)}}}},b(),c=a.EV[a.EV.length]={target:d.one(".ks-multi-select-btn"),type:"click",fn:function(b){b.preventDefault();a.father._handleMultiSelect()}},b());return this};this._monthAdd=function(){11==this.month?(this.year++,this.month=0):this.month++};this._monthMinus=function(){0===this.month?(this.year--,this.month=11):this.month--};
this._yearAdd=function(){this.year++};this._yearMinus=function(){this.year--};this._getNode=function(){return this.node};this._getNumOfDays=function(b,a){return 32-(new Date(b,a-1,32)).getDate()};this._isDisabled=function(b,a){if(b&&0<b.length)for(var c=0;c<b.length;c++){var d=b[c];if(a.getFullYear()==d.getFullYear()&&a.getMonth()==d.getMonth()&&a.getDate()==d.getDate())return!0}return!1};this.isInMulit=function(b,a){if(b&&0<b.length)for(var c=0;c<b.length;c++){var d=b[c].split("-");if(a.getFullYear()==
parseInt(d[0],10)&&a.getMonth()==parseInt(d[1],10)-1&&a.getDate()==parseInt(d[2],10))return!0}return!1};this.createDS=function(){var b="",a=(7-this.father.startDay+(new Date(this.year+"/"+(this.month+1)+"/01")).getDay())%7,c=this._getNumOfDays(this.year,this.month+1),d=this.father.selected,e=new Date,f;for(f=0;f<a;f++)b+='<a href="javascript:void(0);" class="ks-null">0</a>';for(f=1;f<=c;f++){var a="",h=new Date(this.year,this.month,f);if(this.father.minDate&&new Date(this.year,this.month,f+1)<=this.father.minDate||
this.father.maxDate&&h>this.father.maxDate||this._isDisabled(this.father.disabled,h))a="ks-disabled";else if(this.father.range&&h>=this.father.range.start&&h<=this.father.range.end)a="ks-range";else if(d&&d.getFullYear()==this.year&&d.getMonth()==this.month&&d.getDate()==f||this.isInMulit(this.father.multi,h))a="ks-selected";e.getFullYear()==this.year&&e.getMonth()==this.month&&e.getDate()==f&&(a+=" ks-today");b+="<a "+(a?'class="'+a+'"':"")+' href="javascript:void(0);">'+f+"</a>"}this.ds=b;return this};
this.render=function(){this._renderUI();this._buildEvent();return this}}});return m},{requires:["node","calendar/base"]});
KISSY.add("calendar/time",function(f,h,m){f.augment(m,{TimeSelector:function(f,e){this.father=e;this.fcon=f.parent(".ks-cal-box");this.popupannel=this.fcon.one(".ks-selectime");"undefined"==typeof e._time&&(e._time=new Date);this.time=e._time;this.status="s";this.ctime=h('<div class="ks-cal-time">\u65f6\u95f4\uff1a<span class="h">h</span>:<span class="m">m</span>:<span class="s">s</span><\!--{{arrow--\><div class="cta"><button class="u"></button><button class="d"></button></div><\!--arrow}}--\></div>');this.button=
h('<button class="ct-ok">\u786e\u5b9a</button>');this.h_a="00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23".split(",");this.m_a="00,10,20,30,40,50".split(",");this.s_a="00,10,20,30,40,50".split(",");this.parseSubHtml=function(b){for(var a="",c=0;c<b.length;c++)a=a+('<a href="javascript:void(0);" class="item">'+b[c]+"</a>");return a+'<a href="javascript:void(0);" class="x">x</a>'};this.showPopup=function(b){this.popupannel.html(b);this.popupannel.removeClass("hidden");b=this.status;this.ctime.all("span").removeClass("on");
switch(b){case "h":this.ctime.all(".h").addClass("on");break;case "m":this.ctime.all(".m").addClass("on");break;case "s":this.ctime.all(".s").addClass("on")}};this.hidePopup=function(){this.popupannel.addClass("hidden")};this.render=function(){var b=this.get("h"),a=this.get("m"),c=this.get("s");this.father._time=this.time;this.ctime.all(".h").html(b);this.ctime.all(".m").html(a);this.ctime.all(".s").html(c);return this};this.set=function(b,a){a=Number(a);switch(b){case "h":this.time.setHours(a);break;
case "m":this.time.setMinutes(a);break;case "s":this.time.setSeconds(a)}this.render()};this.get=function(b){var a=this.time;switch(b){case "h":return a.getHours();case "m":return a.getMinutes();case "s":return a.getSeconds()}};this.add=function(){var b=this.status,a=this.get(b);a++;this.set(b,a)};this.minus=function(){var b=this.status,a=this.get(b);a--;this.set(b,a)};this._init=function(){var b=this;f.html("").append(b.ctime);f.append(b.button);b.render();b.popupannel.on("click",function(a){a=h(a.target);
if(a.hasClass("x"))b.hidePopup();else if(a.hasClass("item")){a=Number(a.html());b.set(b.status,a);b.hidePopup()}});b.button.on("click",function(){var a=typeof b.father.dt_date=="undefined"?b.father.date:b.father.dt_date;a.setHours(b.get("h"));a.setMinutes(b.get("m"));a.setSeconds(b.get("s"));b.father.fire("timeSelect",{date:a});b.father.popup&&b.father.closable&&b.father.hide()});b.ctime.on("keyup",function(a){if(a.keyCode==38||a.keyCode==37){a.preventDefault();b.add()}if(a.keyCode==40||a.keyCode==
39){a.preventDefault();b.minus()}});b.ctime.one(".u").on("click",function(){b.hidePopup();b.add()});b.ctime.one(".d").on("click",function(){b.hidePopup();b.minus()});b.ctime.one(".h").on("click",function(){var a=b.parseSubHtml(b.h_a);b.status="h";b.showPopup(a)});b.ctime.one(".m").on("click",function(){var a=b.parseSubHtml(b.m_a);b.status="m";b.showPopup(a)});b.ctime.one(".s").on("click",function(){var a=b.parseSubHtml(b.s_a);b.status="s";b.showPopup(a)})};this._init()}});return m},{requires:["node",
"calendar/base"]});
