/*
Copyright 2013, KISSY v1.41
MIT Licensed
build time: Dec 4 22:08
*/
KISSY.add("editor/plugin/code/dialog",["editor","menubutton","../dialog"],function(b,d){function g(a){this.editor=a}var h=d("editor"),j=d("menubutton"),i=h.XHTML_DTD,k=b.DOM.NodeType,l=h.Walker.whitespaces(!0),m=d("../dialog"),n='<div class="{prefixCls}code-wrap"><table class="{prefixCls}code-table"><tr><td class="{prefixCls}code-label"><label for="ks-editor-code-type">\u7c7b\u578b\uff1a</label></td><td class="{prefixCls}code-content"><select id="ks-editor-code-type"  class="{prefixCls}code-type">'+b.map([["ActionScript3",
"as3"],["Bash/Shell","bash"],["C/C++","cpp"],["Css","css"],["CodeFunction","cf"],["C#","c#"],["Delphi","delphi"],["Diff","diff"],["Erlang","erlang"],["Groovy","groovy"],["HTML","html"],["Java","java"],["JavaFx","jfx"],["Javascript","js"],["Perl","pl"],["Php","php"],["Plain Text","plain"],["PowerShell","ps"],["Python","python"],["Ruby","ruby"],["Scala","scala"],["Sql","sql"],["Vb","vb"],["Xml","xml"]],function(a){return'<option value="'+a[1]+'">'+a[0]+"</option>"})+'</select></td></tr><tr><td><label for="ks-editor-code-textarea">\u4ee3\u7801\uff1a</label></td><td><textarea id="ks-editor-code-textarea"  class="{prefixCls}code-textarea {prefixCls}input"></textarea></td></tr></table></div>';
b.augment(g,{initDialog:function(){var a=this.editor.get("prefixCls")+"editor-",c,f;f=this.dialog=(new m({width:500,mask:!0,headerContent:"\u63d2\u5165\u4ee3\u7801",bodyContent:b.substitute(n,{prefixCls:a}),footerContent:b.substitute('<div class="{prefixCls}code-table-action"><a href="javascript:void(\'\u63d2\u5165\')" class="{prefixCls}code-insert {prefixCls}button">\u63d2\u5165</a><a href="javascript:void(\'\u53d6\u6d88\')" class="{prefixCls}code-cancel {prefixCls}button">\u53d6\u6d88</a></td></div>',{prefixCls:a})})).render();c=f.get("el");this.insert=
c.one("."+a+"code-insert");this.cancel=c.one("."+a+"code-cancel");this.type=j.Select.decorate(c.one("."+a+"code-type"),{prefixCls:a+"big-",width:150,menuCfg:{prefixCls:a,height:320,render:f.get("contentEl")}});this.code=c.one("."+a+"code-textarea");this.insert.on("click",this._insert,this);this.cancel.on("click",this.hide,this)},hide:function(){this.dialog.hide()},_insert:function(){var a,c=this.editor;if(b.trim(a=this.code.val())){a=b.all(b.substitute('<pre class="prettyprint ks-editor-code brush:{type};toolbar:false;">{code}</pre>',
{type:this.type.get("value"),code:b.escapeHtml(a)}),c.get("document")[0]);this.dialog.hide();c.insertElement(a);var f=c.getSelection().getRanges()[0],e=a.next(l,1),d=e&&e[0].nodeType===k.ELEMENT_NODE&&e.nodeName();if(!d||!i.$block[d]||!i[d]["#text"])e=b.all("<p></p>",c.get("document")[0]),b.UA.ie||e._4eAppendBogus(),a.after(e);f.moveToElementEditablePosition(e);c.getSelection().selectRanges([f])}else alert("\u8bf7\u8f93\u5165\u4ee3\u7801!")},show:function(){this.dialog||this.initDialog();this.dialog.show()}});return g});
