/*
Copyright 2013, KISSY v1.41
MIT Licensed
build time: Dec 4 22:14
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 editor/plugin/unordered-list
*/

KISSY.add("editor/plugin/unordered-list", ["./list-utils/btn", "./unordered-list/cmd"], function(S, require) {
  var ListButton = require("./list-utils/btn");
  var ListCmd = require("./unordered-list/cmd");
  function unorderedList() {
  }
  S.augment(unorderedList, {pluginRenderUI:function(editor) {
    ListCmd.init(editor);
    ListButton.init(editor, {cmdType:"insertUnorderedList", buttonId:"unorderedList", menu:{width:75, children:[{content:"\u25cf \u5706\u70b9", value:"disc"}, {content:"\u25cb \u5706\u5708", value:"circle"}, {content:"\u25a0 \u65b9\u5757", value:"square"}]}, tooltip:"\u65e0\u5e8f\u5217\u8868"})
  }});
  return unorderedList
});

