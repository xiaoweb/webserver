/*
Copyright 2013, KISSY v1.41
MIT Licensed
build time: Dec 4 22:16
*/
KISSY.add("html-parser/dtd",[],function(c){var c=c.merge,b={isindex:1,fieldset:1},d={input:1,button:1,select:1,textarea:1,label:1},f=c({a:1},d),a=c({iframe:1},f),i={hr:1,ul:1,menu:1,div:1,blockquote:1,noscript:1,table:1,center:1,address:1,dir:1,pre:1,h5:1,dl:1,h4:1,noframes:1,h6:1,ol:1,h1:1,h3:1,h2:1},g={ins:1,del:1,script:1,style:1},l=c({b:1,acronym:1,bdo:1,"var":1,"#text":1,abbr:1,code:1,br:1,i:1,cite:1,kbd:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,dfn:1,span:1},g),o=c({sub:1,img:1,object:1,
sup:1,basefont:1,map:1,applet:1,font:1,big:1,small:1},l),h=c({p:1},o),d=c({iframe:1},o,d),o={img:1,noscript:1,br:1,kbd:1,center:1,button:1,basefont:1,h5:1,h4:1,samp:1,h6:1,ol:1,h1:1,h3:1,h2:1,form:1,font:1,"#text":1,select:1,menu:1,ins:1,abbr:1,label:1,code:1,table:1,script:1,cite:1,input:1,iframe:1,strong:1,textarea:1,noframes:1,big:1,small:1,span:1,hr:1,sub:1,bdo:1,"var":1,div:1,object:1,sup:1,strike:1,dir:1,map:1,dl:1,applet:1,del:1,isindex:1,fieldset:1,ul:1,b:1,acronym:1,a:1,blockquote:1,i:1,
u:1,s:1,tt:1,address:1,q:1,pre:1,p:1,em:1,dfn:1},k=c({a:1},d),m={tr:1},n={"#text":1},p=c({param:1},o),e=c({form:1},b,a,i,h),j={li:1},t={base:1,link:1,meta:1,title:1},r=c(t,{style:1,script:1}),q={head:1,body:1},u={address:1,blockquote:1,center:1,dir:1,div:1,dl:1,fieldset:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,menu:1,noframes:1,ol:1,p:1,pre:1,table:1,ul:1},c={$nonBodyContent:c({html:1},q,t),$block:u,$blockLimit:{body:1,div:1,td:1,th:1,caption:1,form:1},$inline:k,$body:c({script:1,style:1},
u),$cdata:{script:1,style:1},$empty:{area:1,base:1,br:1,col:1,hr:1,img:1,input:1,link:1,meta:1,param:1},$listItem:{dd:1,dt:1,li:1},$list:{ul:1,ol:1,dl:1},$nonEditable:{applet:1,button:1,embed:1,iframe:1,map:1,object:1,option:1,script:1,textarea:1,param:1},$removeEmpty:{abbr:1,acronym:1,address:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1},$tabIndex:{a:1,area:1,button:1,input:1,object:1,
select:1,textarea:1},$tableContent:{caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1},html:q,head:r,style:n,body:e,base:{},link:{},meta:{},title:n,col:{},tr:{td:1,th:1},img:{},colgroup:{col:1},noscript:e,td:e,br:{},th:e,center:e,kbd:k,button:c(h,i),basefont:{},h5:k,h4:k,samp:k,h6:k,ol:j,h1:k,h3:k,option:n,h2:k,form:c(b,a,i,h),select:{optgroup:1,option:1},font:k,ins:k,menu:j,abbr:k,label:k,table:{thead:1,col:1,tbody:1,tr:1,colgroup:1,caption:1,tfoot:1},code:k,script:n,tfoot:m,cite:k,
li:e,input:{},iframe:e,strong:k,textarea:n,noframes:e,big:k,small:k,span:k,hr:{},dt:k,sub:k,optgroup:{option:1},param:{},bdo:k,"var":k,div:e,object:p,sup:k,dd:e,strike:k,area:{},dir:j,map:c({area:1,form:1,p:1},b,g,i),applet:p,dl:{dt:1,dd:1},del:k,isindex:{},fieldset:c({legend:1},o),thead:m,ul:j,acronym:k,b:k,a:d,blockquote:e,caption:k,i:k,u:k,tbody:m,s:k,address:c(a,h),tt:k,legend:k,q:k,pre:c(l,f),p:k,em:k,dfn:k},f="article,figure,nav,aside,section,footer".split(","),s;for(s in c)for(var v in c[s])if("div"===
v)for(b=0;b<f.length;b++)c[s][f[b]]=c[s][v];for(b=0;b<f.length;b++)c[f[b]]=c.div;c.$empty["!doctype"]=1;return c});KISSY.add("html-parser/lexer/cursor",[],function(){function c(c){this.position=c||0}c.prototype={constructor:c,advance:function(){this.position++},clone:function(){var b=new c;b.position=this.position;return b},retreat:function(){this.position=Math.max(--this.position,0)}};return c});
KISSY.add("html-parser/lexer/index",[],function(){function c(){this.lineCursors=[]}c.prototype={constructor:c,add:function(c){var d;a:{d=this.lineCursors;for(var f=c.position,a=0;a<d.length;a++){var i=d[a].position;if(i===f){d=-1;break a}if(i>f)break}d=a}-1!==d&&this.lineCursors.splice(d,0,c.clone())},remove:function(c){var d=this.lineCursors,f;a:{f=this.lineCursors;for(var c=c.position,a=0;a<f.length;a++){var i=f[a].position;if(i===c){f=a;break a}if(i<c)break}f=-1}-1!==f&&d.splice(f,1)},row:function(c){for(var d=
this.lineCursors,f=0;f<d.length;f++)if(d[f].position>c.position)return f-1;return f},col:function(c){var d=0,f=this.lineCursors[this.row(c)-1];f&&(d=f.position);return c.position-d}};return c});
KISSY.add("html-parser/lexer/page",["./index"],function(c,b){function d(a){this.source=a;this.lineIndex=new f}var f=b("./index");d.prototype={constructor:d,getChar:function(a){var c=this.source,g=a.position;if(g>=c.length)return-1;var d=c.charAt(g);a.advance();"\r"===d&&(d="\n",g=a.position,"\n"===c.charAt(g)&&a.advance());"\n"===d&&this.lineIndex.add(a);return d},ungetChar:function(a){var c=this.source;a.retreat();var d=a.position,b=c.charAt(d);"\n"===b&&0!==d&&(b=c.charAt(d-1),"\r"===b&&a.retreat())},
getText:function(a,c){return this.source.slice(a,c)},row:function(a){return this.lineIndex.row(a)},col:function(a){return this.lineIndex.col(a)}};return d});
KISSY.add("html-parser/nodes/node",[],function(){function c(c){var b=0;c.replace(/\n/g,function(){b++});return b}function b(c,b,a){this.parentNode=null;this.page=c;this.startPosition=b;this.endPosition=a;this.nextSibling=this.previousSibling=this.nodeName=null}b.prototype={constructor:b,getStartLine:function(){if(this.page){if("startLine"in this)return this.startLine;this.startLine=c(this.page.getText(0,this.startPosition))}return-1},getEndLine:function(){if(this.page){if("endLine"in this)return this.endLine;
this.endLine=c(this.page.getText(0,this.endPosition))}return-1},toHtml:function(){return this.page&&this.page.getText?this.page.getText(this.startPosition,this.endPosition):""},toDebugString:function(){var c=[];c.push(this.nodeName+"  [ "+this.startPosition+"|"+this.getStartLine()+" : "+this.endPosition+"|"+this.getEndLine()+" ]\n");c.push(this.toHtml());return c.join("")}};return b});
KISSY.add("html-parser/nodes/text",["./node"],function(c,b){function d(a){"string"===typeof a?(this.nodeValue=a,d.superclass.constructor.apply(this,[null,-1,-1])):(d.superclass.constructor.apply(this,arguments),this.nodeValue=this.toHtml());this.nodeType=3;this.nodeName="#text"}var f=b("./node");c.extend(d,f,{writeHtml:function(a,c){var d;if(!c||!1!==(d=c.onText(this)))d&&this!==d?d.writeHtml(a,c):a.text(this.toHtml())},toHtml:function(){return this.nodeValue?this.nodeValue:d.superclass.toHtml.apply(this,
arguments)}});return d});KISSY.add("html-parser/nodes/cdata",["./text"],function(c,b){function d(){d.superclass.constructor.apply(this,arguments);this.nodeType=4;this.nodeName="#cdata"}var f=b("./text");c.extend(d,f,{writeHtml:function(c,d){var b;if(!d||!1!==(b=d.onCData(this)))b&&this!==b?b.writeHtml(c,d):c.cdata(this.toHtml())}});return d});
KISSY.add("html-parser/utils",[],function(){return{isBooleanAttribute:function(c){return/^(?:checked|disabled|selected|readonly|defer|multiple|nohref|noshape|nowrap|noresize|compact|ismap)$/i.test(c)},collapseWhitespace:function(c){return c.replace(/[\s\xa0]+/g," ")},isLetter:function(c){return"a"<=c&&"z">=c||"A"<=c&&"Z">=c},isValidAttributeNameStartChar:function(c){return!this.isWhitespace(c)&&'"'!==c&&"'"!==c&&">"!==c&&c!==""<""&&"/"!==c&&"="!==c},isWhitespace:function(c){return/^[\s\xa0]$/.test(c)}}});
KISSY.add("html-parser/nodes/attribute",[],function(c){function b(c,b,a,i){this.nodeType=2;this.name=c;this.assignment=b;this.value=a;this.quote=i}c.augment(b,{clone:function(){var d=new b;c.mix(d,this);return d},equals:function(c){return this.name===c.name&&this.value===c.value&&this.nodeType===c.nodeType}});b.prototype.clone=function(){var d=new b;c.mix(d,this);return d};return b});
KISSY.add("html-parser/nodes/tag",["./node","./attribute","../dtd"],function(c,b){function d(h,a,m){h.nodeName=h.tagName=a.toLowerCase();h._updateSelfClosed();c.each(m,function(c,a){h.setAttribute(a,c)})}function f(h,a,m,n){this.childNodes=[];this.lastChild=this.firstChild=null;this.attributes=n||[];this.nodeType=1;if("string"===typeof h)d.apply(null,[this].concat(c.makeArray(arguments)));else{f.superclass.constructor.apply(this,arguments);n=this.attributes;n[0]&&(this.nodeName=n[0].name.toLowerCase(),
this.tagName=this.nodeName.replace(/\//,""),this._updateSelfClosed(),n.splice(0,1));var p=n[n.length-1];if(p=!(!p||!/\/$/.test(p.name)))n.length-=1;this.closed=this.isSelfClosed=this.isSelfClosed||p}this.closedEndPosition=this.closedStartPosition=-1}function a(c){var a=c.childNodes;c.firstChild=a[0];c.lastChild=a[a.length-1];1<=a.length&&(a[0].nextSibling=a[0].nextSibling=null,a[0].parentNode=c);if(1<a.length){for(var m=0;m<a.length-1;m++)a[m].nextSibling=a[m+1],a[m+1].previousSibling=a[m],a[m+1].parentNode=
c;a[a.length-1].nextSibling=null}}function i(a,c){if(a&&a.length)for(var m=0;m<a.length;m++)if(a[m].name===c)return a[m];return null}var g=b("./node"),l=b("./attribute"),o=b("../dtd");c.extend(f,g,{_updateSelfClosed:function(){this.isSelfClosed=!!o.$empty[this.nodeName];this.isSelfClosed||(this.isSelfClosed=/\/$/.test(this.nodeName));this.closed=this.isSelfClosed},clone:function(){var a=new f,b=[];c.each(this.attributes,function(a){b.push(a.clone())});c.mix(a,{childNodes:[],firstChild:null,lastChild:null,
attributes:b,nodeType:this.nodeType,nodeName:this.nodeName,tagName:this.tagName,isSelfClosed:this.isSelfClosed,closed:this.closed,closedStartPosition:this.closedStartPosition,closedEndPosition:this.closedEndPosition});return a},setTagName:function(a){(this.nodeName=this.tagName=a)&&this._updateSelfClosed()},equals:function(a){if(!a||this.nodeName!==a.nodeName||this.nodeType!==a.nodeType||this.attributes.length!==a.attributes.length)return 0;for(var c=0;c<this.attributes.length;c++)if(!this.attributes[c].equals(a.attributes[c]))return 0;
return 1},isEndTag:function(){return/^\//.test(this.nodeName)},appendChild:function(c){this.childNodes.push(c);a(this)},replace:function(h){var b=h.parentNode.childNodes,m=c.indexOf(h,b);b[m]=this;a(h.parentNode)},replaceChild:function(h,b){var m=this.childNodes,n=c.indexOf(b,m);m[n]=h;a(this)},prepend:function(c){this.childNodes.unshift(c);a(this)},insertBefore:function(h){var b=h.parentNode.childNodes,m=c.indexOf(h,b);b.splice(m,0,this);a(h.parentNode)},insertAfter:function(a){var b=a.parentNode.childNodes,
m=c.indexOf(a,b);m===b.length-1?a.parentNode.appendChild(this):this.insertBefore(a.parentNode.childNodes[[m+1]])},empty:function(){this.childNodes=[];a(this)},removeChild:function(b){var d=b.parentNode.childNodes,m=c.indexOf(b,d);d.splice(m,1);a(b.parentNode)},getAttribute:function(a){return(a=i(this.attributes,a))&&a.value},setAttribute:function(a,c){var m=i(this.attributes,a);m?m.value=c:this.attributes.push(new l(a,"=",c,'"'))},removeAttribute:function(a){(a=i(this.attributes,a))&&this.attributes.splice(c.indexOf(a,
this.attributes),1)},filterChildren:function(){var a=this;if(!a.isChildrenFiltered){var b=new (c.require("html-parser/writer/basic"));a._writeChildrenHTML(b);b=(new (c.require("html-parser/parser"))(b.getHtml())).parse().childNodes;a.empty();c.each(b,function(c){a.appendChild(c)});a.isChildrenFiltered=1}},writeHtml:function(a,c){var b=this,n;n=b.tagName;if("!doctype"===n)a.append(this.toHtml()+"\n");else{b.__filter=c;b.isChildrenFiltered=0;if(c){if(!(n=c.onTagName(n)))return;b.tagName=n;n=c.onTag(b);
if(!1===n)return;n&&(b=n);if(1!==b.nodeType){b.writeHtml(a,c);return}if(!b.tagName){b._writeChildrenHTML(a);return}}a.openTag(b);for(var p=b.attributes,e=0;e<p.length;e++){var j=p[e];n=j.name;if(c){if(!(n=c.onAttributeName(n,b)))continue;j.name=n;if(!1===c.onAttribute(j,b))continue}a.attribute(j,b)}a.openTagClose(b);b.isSelfClosed||(b._writeChildrenHTML(a),a.closeTag(b))}},_writeChildrenHTML:function(a){var b=this.isChildrenFiltered?0:this.__filter;c.each(this.childNodes,function(c){c.writeHtml(a,
b)})}});return f});KISSY.add("html-parser/nodes/comment",["./text"],function(c,b){function d(){d.superclass.constructor.apply(this,arguments);this.nodeType=8;this.nodeName="#comment"}var f=b("./text");c.extend(d,f,{writeHtml:function(a,c){var b;if(!c||!1!==(b=c.onComment(this)))b&&this!==b?b.writeHtml(a,c):a.comment(this.toHtml())},toHtml:function(){if(this.nodeValue)return this.nodeValue;var a=f.superclass.toHtml.apply(this,arguments);return a.substring(4,a.length-3)}});return d});
KISSY.add("html-parser/lexer/lexer","./cursor,./page,../nodes/text,../nodes/cdata,../utils,../nodes/attribute,../nodes/tag,../nodes/comment".split(","),function(c,b){function d(c,b){this.page=new a(c);this.cursor=new f;this.nodeFactory=this;this.cfg=b||{}}var f=b("./cursor"),a=b("./page"),i=b("../nodes/text"),g=b("../nodes/cdata"),l=b("../utils"),o=b("../nodes/attribute"),h=b("../nodes/tag"),k=b("../nodes/comment");d.prototype={constructor:d,setPosition:function(a){this.cursor.position=a},getPosition:function(){return this.cursor.position},
nextNode:function(a){var c,b,e=this.cursor,j=this.page;c=e.position;b=j.getChar(e);switch(b){case -1:a=null;break;case "<":b=j.getChar(e);if(b===-1)a=this.makeString(c,e.position);else if(b==="/"||l.isLetter(b)){j.ungetChar(e);a=this.parseTag(c)}else if("!"===b||"?"===b){b=j.getChar(e);if(b===-1)a=this.makeString(c,e.position);else if(">"===b)a=this.makeComment(c,e.position);else{j.ungetChar(e);if("-"===b)a=this.parseComment(c,a);else{j.ungetChar(e);a=this.parseTag(c)}}}else{j.ungetChar(e);a=this.parseString(c,
a)}break;default:j.ungetChar(e);a=this.parseString(c,a)}return a},makeComment:function(a,c){var b;b=c-a;if(0!==b){if(2>b)return this.makeString(a,c);b=this.nodeFactory.createCommentNode(this.page,a,c)}else b=null;return b},makeString:function(a,c){var b=null;c-a>0&&(b=this.nodeFactory.createStringNode(this.page,a,c));return b},makeCData:function(a,c){var b=null;c-a>0&&(b=this.nodeFactory.createCDataNode(this.page,a,c));return b},makeTag:function(a,c,b){var e;e=c-a;if(0!==e){if(2>e)return this.makeString(a,
c);a=this.nodeFactory.createTagNode(this.page,a,c,b)}else a=null;return a},createTagNode:function(a,c,b,e){return new h(a,c,b,e)},createStringNode:function(a,c,b){return new i(a,c,b)},createCDataNode:function(a,c,b){return new g(a,c,b)},createCommentNode:function(a,c,b){return new k(a,c,b)},parseTag:function(a){var b,d=[],e=[],j,t=this.cfg.strict,h=c.noop,g=this.page,f=0,i=this.cursor;t&&(h=function(){if(t&&j===-1&&e.length)throw Error(e[0].name+" syntax error at row "+(g.row(i)+1)+" , col "+(g.col(i)+
1));});for(d[0]=i.position;!b;){d[f+1]=i.position;j=g.getChar(i);switch(f){case 0:if(j===-1||">"===j||"<"===j){if("<"===j){g.ungetChar(i);d[f+1]=i.position}b=true}else if(j==="/"||l.isValidAttributeNameStartChar(j))f=1;break;case 1:if(-1===j||">"===j||"<"===j){if("<"===j){g.ungetChar(i);d[f+1]=i.getPosition}this.standalone(e,d);b=true}else if(l.isWhitespace(j)){d[6]=d[2];f=6}else"="===j&&(f=2);break;case 2:if(-1===j||">"===j){this.standalone(e,d);b=true}else if("'"===j){f=4;d[4]=d[3]}else if('"'===
j){f=5;d[5]=d[3]}else l.isWhitespace(j)||(f=3);break;case 3:if(-1===j||">"===j){this.naked(e,d);b=true}else if(l.isWhitespace(j)){this.naked(e,d);d[0]=d[4];f=0}break;case 4:if(-1===j){this.singleQuote(e,d);b=true}else if("'"===j){this.singleQuote(e,d);d[0]=d[5]+1;f=0}break;case 5:if(-1===j){this.doubleQuote(e,d);b=true}else if('"'===j){this.doubleQuote(e,d);d[0]=d[6]+1;f=0}break;case 6:if(-1===j){this.standalone(e,d);d[0]=d[6];g.ungetChar(i);f=0}else if("="===j){d[2]=d[6];d[3]=d[7];f=2}else if(!l.isWhitespace(j)){this.standalone(e,
d);d[0]=d[6];g.ungetChar(i);f=0}break;default:throw Error("how ** did we get in state "+f);}h()}return this.makeTag(a,i.position,e)},parseComment:function(a,c){var b,e,j=this.page,d=this.cursor,g;b=false;for(g=0;!b;){e=j.getChar(d);if(-1===e)b=true;else switch(g){case 0:if(">"===e)b=true;else if("-"===e)g=1;else return this.parseString(a,c);break;case 1:if("-"===e){e=j.getChar(d);if(-1===e)b=true;else if(">"===e)b=true;else{j.ungetChar(d);g=2}}else return this.parseString(a,c);break;case 2:if("-"===
e)g=3;else if(-1===e)return this.parseString(a,c);break;case 3:g="-"===e?4:2;break;case 4:">"===e?b=true:l.isWhitespace(e)||(g=2);break;default:throw Error("how ** did we get in state "+g);}}return this.makeComment(a,d.position)},parseString:function(a,c){for(var b=0,e,d=this.page,g=this.cursor,h=0;!b;){e=d.getChar(g);if(-1===e)b=1;else if(c&&0===h&&('"'===e||"'"===e))h=e;else if(c&&0!==h&&"\\"===e){e=d.getChar(g);-1!==e&&"\\"!==e&&e!==h&&d.ungetChar(g)}else if(c&&e===h)h=0;else if(c&&0===h&&e===
"/"){e=d.getChar(g);if(-1===e)b=1;else if("/"===e){do e=d.getChar(g);while(-1!==e&&"\n"!==e)}else if("*"===e){do{do e=d.getChar(g);while(-1!==e&&"*"!==e);e=d.getChar(g);e==="*"&&d.ungetChar(g)}while(-1!==e&&"/"!==e)}else d.ungetChar(g)}else if(0===h&&"<"===e){e=d.getChar(g);if(-1===e)b=1;else{if("/"===e||l.isLetter(e)||"!"===e||"?"===e){b=1;d.ungetChar(g)}d.ungetChar(g)}}}return this.makeString(a,g.position)},parseCDATA:function(a,c){var b,e,d,g,h,f,i=this.cursor,k=this.page;b=i.position;e=0;d=false;
g="";for(f=false;!d;){h=k.getChar(i);switch(e){case 0:switch(h){case -1:d=true;break;case "'":a&&!f&&(""===g?g="'":"'"===g&&(g=""));break;case '"':a&&!f&&(""===g?g='"':'"'===g&&(g=""));break;case "\\":if(a&&""!==g){h=k.getChar(i);-1===h?d=true:h!=="\\"&&h!==g&&k.ungetChar(i)}break;case "/":if(a&&""===g){h=k.getChar(i);if(-1===h)d=true;else if("/"===h)f=true;else if("*"===h){do{do h=k.getChar(i);while(-1!==h&&"*"!==h);h=k.getChar(i);h==="*"&&k.ungetChar(i)}while(-1!==h&&"/"!==h)}else k.ungetChar(i)}break;
case "\n":f=false;break;case "<":a?""===g&&(e=1):e=1}break;case 1:switch(h){case -1:d=true;break;case "/":e=!c||k.getText(i.position,i.position+c.length)===c&&!k.getText(i.position+c.length,i.position+c.length+1).match(/\w/)?2:0;break;case "!":h=k.getChar(i);if(-1===h)d=true;else if("-"===h){h=k.getChar(i);-1===h?d=true:e="-"===h?3:0}else e=0;break;default:e=0}break;case 2:f=false;if(-1===h)d=true;else if(l.isLetter(h)){d=true;k.ungetChar(i);k.ungetChar(i);k.ungetChar(i)}else e=0;break;case 3:f=false;
if(-1===h)d=true;else if("-"===h){h=k.getChar(i);if(-1===h)d=true;else if("-"===h){h=k.getChar(i);if(-1===h)d=true;else if(">"===h)e=0;else{k.ungetChar(i);k.ungetChar(i)}}else k.ungetChar(i)}break;default:throw Error("unexpected "+e);}}return this.makeCData(b,i.position)},singleQuote:function(a,c){var b=this.page;a.push(new o(b.getText(c[1],c[2]),"=",b.getText(c[4]+1,c[5]),"'"))},doubleQuote:function(a,c){var b=this.page;a.push(new o(b.getText(c[1],c[2]),"=",b.getText(c[5]+1,c[6]),'"'))},standalone:function(a,
c){a.push(new o(this.page.getText(c[1],c[2])))},naked:function(a,c){var b=this.page;a.push(new o(b.getText(c[1],c[2]),"=",b.getText(c[3],c[4])))}};return d});KISSY.add("html-parser/nodes/fragment",["./tag"],function(c,b){function d(){this.childNodes=[];this.nodeType=9;this.nodeName="#fragment"}var f=b("./tag");c.extend(d,f,{writeHtml:function(a,c){this.__filter=c;this.isChildrenFiltered=0;if(c)c.onFragment(this);this._writeChildrenHTML(a)}});return d});
KISSY.add("html-parser/nodes/document",["./tag"],function(c,b){function d(){this.childNodes=[];this.nodeType=9;this.nodeName="#document"}var f=b("./tag");c.extend(d,f,{writeHtml:function(a,c){this.__filter=c;this._writeChildrenHTML(a)}});return d});KISSY.add("html-parser/scanners/special-scanners",[],function(){return{}});
KISSY.add("html-parser/scanners/tag-scanner",["../dtd","../nodes/tag","./special-scanners"],function(c,b){function d(b,g){function o(){e.childNodes.length&&(e.insertAfter(j),j=e,e=b.clone())}b.closed=1;if(!g.fixByDtd)return 0;var n=1,p=[].concat(b.childNodes);c.each(p,function(a){if(!f(b,a))return n=0,!1});if(n)return 0;for(var e=b.clone(),j=b,t=[],r=0;r<p.length;r++){var q=p[r];if(f(e,q))e.appendChild(q);else if(1===q.nodeType){var u=q.tagName;if(a.$listItem[u]){o();var q=l[q.tagName],s=new i;for(s.nodeName=
s.tagName=q;r<p.length;){if(p[r].tagName===u)s.appendChild(p[r]);else if(3===p[r].nodeType&&c.trim(p[r].toHtml()))break;r++}s.insertAfter(j);j=s;r--}else o(),q.equals(e)?(q.insertAfter(j),j=q):f(q,e)?(e=b.clone(),c.each(q.childNodes,function(a){e.appendChild(a)}),q.empty(),q.insertAfter(j),j=q,q.appendChild(e),t.push(e),e=b.clone()):(q.insertAfter(j),j=q)}}e.childNodes.length&&e.insertAfter(j);b.parentNode.removeChild(b);c.each(t,function(a){d(a,g)});return 1}function f(c,b){if(9===c.nodeType)return 1;
a[c.tagName]||"dtd["+c.tagName+"] === undefined!";return 8===b.nodeType?1:!!a[c.tagName][b.tagName||b.nodeName]}var a=b("../dtd"),i=b("../nodes/tag"),g=b("./special-scanners"),l={li:"ul",dt:"dl",dd:"dl"},o={dd:{dl:1},dt:{dl:1},li:{ul:1,ol:1},option:{select:1},optgroup:{select:1}};return{scan:function(a,c,b){function i(c,e){for(j=c;j>e;j--){var g=l[j];l[j-1].appendChild(g);d(g,b)}a=l[e];l.length=e}function f(a){var c=0,b;if(b=o[a.tagName]){for(var e=l.length-1,d=l[e];d&&!(d.tagName in b);){if(d.tagName===
a.tagName){c=1;break}e--;d=l[e]}c&&i(l.length-1,e-1)}return c}var e,j,l;l=b.stack=b.stack||[];do{if(e=c.nextNode())if(1===e.nodeType)if(e.isEndTag()&&e.tagName===a.tagName)e=null;else if(e.isEndTag()){if(e.isEndTag()){var r=-1;for(j=l.length-1;0<=j;j--)if(l[j].tagName===e.tagName){r=j;break}-1!==r&&(l[l.length-1].appendChild(a),d(a,b),i(l.length-1,r),e=null)}}else g[e.tagName]?(g[e.tagName].scan(e,c,b),a.appendChild(e)):e.isSelfClosed?a.appendChild(e):(l.push(a),f(e)&&l.push(a),a=e);else a.appendChild(e);
null===e&&0<l.length&&(e=l[l.length-1],g[e.tagName]?e=null:(l.length-=1,e.appendChild(a),d(a,b),a=e))}while(e);d(a,b)}}});KISSY.add("html-parser/scanners/cdata-scanner",[],function(){return{scan:function(c,b,d){var d=b.parseCDATA(d.quoteSmart,c.nodeName),f=b.getPosition(),a=b.nextNode();a&&(1!==a.nodeType||!(a.isEndTag()&&a.tagName===c.tagName))&&b.setPosition(f);c.closed=!0;d&&c.appendChild(d)}}});
KISSY.add("html-parser/scanners/quote-cdata-scanner",["./cdata-scanner","../dtd","./special-scanners"],function(c,b){var d=b("./cdata-scanner"),f=b("../dtd"),a=b("./special-scanners"),i={scan:function(a,c,b){b=b||{};b.quoteSmart=1;d.scan(a,c,b);b.quoteSmart=0}},g;for(g in f.$cdata)a[g]=i;return i});
KISSY.add("html-parser/scanners/textarea-scanner",["./cdata-scanner","./special-scanners"],function(c,b){var d=b("./cdata-scanner"),f=b("./special-scanners");f.textarea={scan:function(a,c,b){b=b||{};d.scan(a,c,b)}};return f.textarea});
KISSY.add("html-parser/scanner",["./scanners/tag-scanner","./scanners/special-scanners","./scanners/quote-cdata-scanner","./scanners/textarea-scanner"],function(c,b){var d=b("./scanners/tag-scanner"),f=b("./scanners/special-scanners");b("./scanners/quote-cdata-scanner");b("./scanners/textarea-scanner");return{getScanner:function(a){return f[a]||d}}});
KISSY.add("html-parser/parser","./dtd,./nodes/tag,./nodes/fragment,./lexer/lexer,./nodes/document,./scanner".split(","),function(c,b){function d(a,b){this.originalHTML=a=c.trim(a);a=/^(<!doctype|<html|<body)/i.test(a)?"<document>"+a+"</document>":"<body>"+a+"</body>";this.lexer=new k(a);this.opts=b||{}}function f(a){var b=i(a,"body",3);if(b){var a=b.parentNode,d=a.childNodes,g=c.indexOf(b,d);if(g!==d.length-1){d=d.slice(g+1,d.length);for(g=0;g<d.length;g++){a.removeChild(d[g]);d[g].tagName==="body"?
c.each(d[g].childNodes,function(a){b.appendChild(a)}):b.appendChild(d[g])}}}return b}function a(a){var c=a.childNodes,b,d,g=l.p,h=0;for(d=0;d<c.length;d++){b=c[d];if(b.nodeType===3||b.nodeType===1&&g[b.nodeName]){h=1;break}}if(h){var h=[],i=new o;i.nodeName=i.tagName="p";for(d=0;d<c.length;d++){b=c[d];if(b.nodeType===3||b.nodeType===1&&g[b.nodeName])i.appendChild(b);else{if(i.childNodes.length){h.push(i);i=i.clone()}h.push(b)}}i.childNodes.length&&h.push(i);a.empty();for(d=0;d<h.length;d++)a.appendChild(h[d])}}
function i(a,c,b){if(b===0)return 0;typeof b==="number"&&b--;var d=a.childNodes;if(d)for(var g=0;g<d.length;g++){if(d[g].tagName===c)return d[g];if(a=i(d[g],c,b))return a}return 0}function g(a){for(var b=[].concat(a.childNodes),d=0;d<b.length;d++)if(b[d].nodeName==="html"){for(var g=b[d],h=0;h<d;h++)b[h].nodeType===3&&!c.trim(b[h].toHtml())&&a.removeChild(b[h]);for(;g.firstChild&&g.firstChild.nodeType===3&&!c.trim(g.firstChild.toHtml());)g.removeChild(g.firstChild);break}}var l=b("./dtd"),o=b("./nodes/tag"),
h=b("./nodes/fragment"),k=b("./lexer/lexer"),m=b("./nodes/document"),n=b("./scanner");d.prototype={constructor:d,elements:function(){var b,d,i=this.lexer,l=this.opts;d=b=i.nextNode();if(b.tagName!=="document"){d=new m;d.appendChild(b)}d.nodeType=9;n.getScanner("div").scan(b,i,l);(b=f(d))&&l.autoParagraph&&a(b);g(d);var l=this.originalHTML,k=new h;d=/^(<!doctype|<html|<body)/i.test(l)?d.childNodes:b.childNodes;c.each(d,function(a){k.appendChild(a)});return k},parse:function(){return this.elements()}};
return d});
KISSY.add("html-parser/writer/basic",["../utils"],function(c,b){function d(){this.output=[]}var f=b("../utils").isBooleanAttribute;d.prototype={constructor:d,append:function(){for(var a=this.output,b=arguments,c,d=0;d<b.length;d++)if(c=b[d],1<c.length)for(var f=0;f<c.length;f++)a.push(c.charAt(f));else a.push(c);return this},openTag:function(a){this.append("<",a.tagName)},openTagClose:function(a){a.isSelfClosed&&this.append(" ","/");this.append(">")},closeTag:function(a){this.append("</",a.tagName,
">")},attribute:function(a){var b=a.value||"",a=a.name;f(a)&&!b&&(b=a);this.append(" ",a,'="',(""+b).replace(/'/g,"&quote;"),'"')},text:function(a){this.append(a)},cdata:function(a){this.append(a)},comment:function(a){this.append("<\!--"+a+"--\>")},getHtml:function(){return this.output.join("")}};return d});
KISSY.add("html-parser/writer/beautify",["./basic","../dtd","../utils"],function(c,b){function d(){var b=this;d.superclass.constructor.apply(b,arguments);b.inPre=0;b.indentChar="\t";b.indentLevel=0;b.allowIndent=0;b.rules={};var i=c.merge(a.$nonBodyContent,a.$block,a.$listItem,a.$tableContent,{select:1,script:1,style:1}),f;for(f in i)b.setRules(f,{allowIndent:1,breakBeforeOpen:1,breakAfterOpen:1,breakBeforeClose:1,breakAfterClose:1});c.each("p,h1,h2,h3,h4,h5,h6".split(","),function(a){b.setRules(a,
{allowIndent:0,breakAfterOpen:0,breakBeforeClose:0})});b.setRules("option",{breakBeforeOpen:1});b.setRules("optiongroup",{breakBeforeOpen:1});b.setRules("br",{breakAfterOpen:1});b.setRules("title",{allowIndent:0,breakBeforeClose:0,breakAfterOpen:0});b.setRules("pre",{breakAfterOpen:1,allowIndent:0})}var f=b("./basic"),a=b("../dtd"),i=b("../utils");c.extend(d,f,{indentation:function(){this.inPre||this.append(Array(this.indentLevel+1).join(this.indentChar));this.allowIndent=0},lineBreak:function(){var a=
this.output;if(!this.inPre&&a.length){for(var b=a.length-1;0<=b&&/[\r\n\t ]/.test(a[b]);b--);a.length=b+1;this.append("\n")}this.allowIndent=1},setRules:function(a,b){this.rules[a]||(this.rules[a]={});c.mix(this.rules[a],b)},openTag:function(a){var b=this.rules[a.tagName]||{};this.allowIndent?this.indentation():b.breakBeforeOpen&&(this.lineBreak(),this.indentation());d.superclass.openTag.apply(this,arguments)},openTagClose:function(a){var b=a.tagName,c=this.rules[b]||{};a.isSelfClosed?this.append(" />"):
(this.append(">"),c.allowIndent&&this.indentLevel++);c.breakAfterOpen&&this.lineBreak();"pre"===b&&(this.inPre=1)},closeTag:function(a){var b=a.tagName,c=this.rules[b]||{};c.allowIndent&&this.indentLevel--;this.allowIndent?this.indentation():c.breakBeforeClose&&(this.lineBreak(),this.indentation());d.superclass.closeTag.apply(this,arguments);"pre"===b&&(this.inPre=0);c.breakAfterClose&&this.lineBreak()},text:function(a){this.allowIndent&&this.indentation();this.inPre||(a=i.collapseWhitespace(a));
this.append(a)},comment:function(a){this.allowIndent&&this.indentation();this.append("<\!--"+a+"--\>")},cdata:function(a){this.allowIndent&&this.indentation();this.append(c.trim(a))}});return d});
KISSY.add("html-parser/writer/minify",["./basic","../utils"],function(c,b){function d(){d.superclass.constructor.apply(this,arguments);this.inPre=0}var f=b("./basic"),a=b("../utils"),i=c.trim,g=a.isBooleanAttribute,l=a.collapseWhitespace,o=RegExp("^(?:class|id|style|title|lang|dir|on(?:focus|blur|change|click|dblclick|mouse(?:down|up|over|move|out)|key(?:press|down|up)))$");c.extend(d,f,{comment:function(a){/\[if[^\]]+\]/.test(a)&&(a=a.replace(/^(\[[^\]]+\]>)[\s\xa0]*/,"$1").replace(/[\s\xa0]*(<!\[endif\])$/,
"$1"),d.superclass.comment.call(this,a))},openTag:function(a){"pre"===a.tagName&&(this.inPre=1);d.superclass.openTag.apply(this,arguments)},closeTag:function(a){"pre"===a.tagName&&(this.inPre=0);d.superclass.closeTag.apply(this,arguments)},cdata:function(a){a=i(a).replace(/^(?:[\s\xa0]*\/\*[\s\xa0]*<!\[CDATA\[[\s\xa0]*\*\/|[\s\xa0]*\/\/[\s\xa0]*<!\[CDATA\[.*)/,"").replace(/(?:\/\*[\s\xa0]*\]\]>[\s\xa0]*\*\/|\/\/[\s\xa0]*\]\]>)[\s\xa0]*$/,"");d.superclass.cdata.call(this,a)},attribute:function(a,b){var c=
a.name,d,f=a.value||"";d=a.name;if(!(d=!i(a.value||"")?"input"===b&&"value"===d||o.test(d):0)){d=b.nodeName;var e=a.name,j=a.value||"",j=i(j.toLowerCase());d="script"===d&&"language"===e&&"javascript"===j||"form"===d&&"method"===e&&"get"===j||"input"===d&&"type"===e&&"text"===j||"script"===d&&"type"===e&&"text/javascript"===j||"style"===d&&"type"===e&&"text/css"===j||"area"===d&&"shape"===e&&"rect"===j}if(!d)if(g(c))this.append(" ",c);else{d=b.nodeName;e=a.name;j=a.value||"";/^on[a-z]+/.test(e)?j=
i(j).replace(/^javascript:[\s\xa0]*/i,"").replace(/[\s\xa0]*;$/,""):"class"===e?j=l(i(j)):/^(?:a|area|link|base)$/.test(d)&&"href"===e||"img"===d&&/^(?:src|longdesc|usemap)$/.test(e)||"object"===d&&/^(?:classid|codebase|data|usemap)$/.test(e)||"q"===d&&"cite"===e||"blockquote"===d&&"cite"===e||("ins"===d||"del"===d)&&"cite"===e||"form"===d&&"action"===e||"input"===d&&("src"===e||"usemap"===e)||"head"===d&&"profile"===e||"script"===d&&("src"===e||"for"===e)||/^(?:a|area|object|button)$/.test(d)&&"tabindex"===
e||"input"===d&&("maxlength"===e||"tabindex"===e)||"select"===d&&("size"===e||"tabindex"===e)||"textarea"===d&&/^(?:rows|cols|tabindex)$/.test(e)||"colgroup"===d&&"span"===e||"col"===d&&"span"===e||("th"===d||"td"===d)&&("rowspan"===e||"colspan"===e)?j=i(j):"style"===e&&(j=i(j).replace(/[\s\xa0]*;[\s\xa0]*$/,""));d=(""+j).replace(/"/g,"&quote;");if(!f||/[ "'=<>`]/.test(f))d='"'+d+'"';this.append(" ",c,"=",d)}},text:function(a){this.inPre||(a=l(a));this.append(a)}});return d});
KISSY.add("html-parser/writer/filter",[],function(c){function b(){this.tagNames=[];this.attributeNames=[];this.tags=[];this.comment=[];this.text=[];this.cdata=[];this.attributes=[];this.root=[]}function d(a,b){for(var d=0;a&&d<a.length;d++)c.each(a[d].value,function(a){b=b.replace(a[0],a[1])});return b}function f(a,b,c){var d,f;for(f=0;a&&f<a.length;f++){d=a[f].value;if(!1===(d=d.apply(null,b)))return!1;if(c&&d&&d!==c){if("string"===typeof d){if(c.toHtml()===d)break;c.nodeValue=d;d=c}return this.onNode(d)}}return c}
b.prototype={constructor:b,addRules:function(a,b){var b=b||10,c;for(c in a){var d=this[c];if(d){var f;a:{for(f=0;d&&f<d.length;f++)if(d[f].priority>b)break a;f=d.length}d.splice(f,0,{value:a[c],priority:b})}}},onTagName:function(a){return d(this.tagNames,a)},onAttributeName:function(a){return d(this.attributeNames,a)},onText:function(a){return f.call(this,this.text,[a.toHtml(),a],a)},onCData:function(a){return f.call(this,this.cdata,[a.toHtml(),a],a)},onAttribute:function(a,b){var c;a:{c=this.attributes;
for(var d=0;c&&d<c.length;d++){var f=c[d].value,h,k=a.name;if(f[k]&&!1===(h=f[k].call(null,a.value,b))){c=h;break a}"string"===typeof h&&(a.value=h)}c=a}return c},onComment:function(a){return f.call(this,this.comment,[a.toHtml(),a],a)},onNode:function(a){var b=a.nodeType;if(1===b)return this.onTag(a);if(3===b)return this.onText(a);if(8===b)return this.onComment(a)},onFragment:function(a){return f.call(this,this.root,[a],a)},onTag:function(a){for(var b=["^",a.tagName,"$"],c=this.tags,d,f=0;f<b.length;f++)for(var h=
b[f],k=0;k<c.length;k++)if(d=c[k].value,d[h]){if(!1===(d=d[h](a)))return!1;if(d&&d!==a)return this.onNode(d);if(!a.tagName)return a}return a}};return b});
KISSY.add("html-parser","html-parser/dtd,html-parser/lexer/lexer,html-parser/parser,html-parser/writer/basic,html-parser/writer/beautify,html-parser/writer/minify,html-parser/writer/filter,html-parser/nodes/cdata,html-parser/nodes/comment,html-parser/nodes/node,html-parser/nodes/tag,html-parser/nodes/text".split(","),function(c,b){var d=b("html-parser/dtd"),f=b("html-parser/lexer/lexer"),a=b("html-parser/parser"),i=b("html-parser/writer/basic"),g=b("html-parser/writer/beautify"),l=b("html-parser/writer/minify"),
o=b("html-parser/writer/filter"),h=b("html-parser/nodes/cdata"),k=b("html-parser/nodes/comment"),m=b("html-parser/nodes/node"),n=b("html-parser/nodes/tag"),p=b("html-parser/nodes/text");return{CData:h,Comment:k,Node:m,Tag:n,Text:p,Lexer:f,Parser:a,BasicWriter:i,BeautifyWriter:g,MinifyWriter:l,Filter:o,DTD:d,serialize:function(a,b){var c=new i;a.writeHtml(c,b);return c.getHtml()},parse:function(b){return(new a(b)).parse()}}});
