/*
Copyright 2013, KISSY v1.40dev
MIT Licensed
build time: Oct 25 16:44
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 editor/plugin/justify-center
*/

/**
 * @ignore
 * justifyCenter button.
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/justify-center", function (S, Editor, justifyCenterCmd) {
    function exec() {
        var editor = this.get("editor");
        editor.execCommand("justifyCenter");
        editor.focus();
    }

    function justifyCenter() {
    }

    S.augment(justifyCenter, {
        pluginRenderUI:function (editor) {
            justifyCenterCmd.init(editor);
            editor.addButton("justifyCenter", {
                tooltip:"居中对齐",
                checkable:true,
                listeners:{
                    click:exec,
                    afterSyncUI:function () {
                        var self = this;
                        editor.on("selectionChange", function () {
                            if (editor.get("mode") == Editor.Mode.SOURCE_MODE) {
                                return;
                            }
                            if (editor.queryCommandValue("justifyCenter")) {
                                self.set("checked", true);
                            } else {
                                self.set("checked", false);
                            }
                        });
                    }
                },
                mode:Editor.Mode.WYSIWYG_MODE
            });


            editor.docReady(function () {
                editor.get("document").on("keydown", function (e) {
                    if (e.ctrlKey && e.keyCode == S.Node.KeyCode.E) {
                        editor.execCommand("justifyCenter");
                        e.preventDefault();
                    }
                });
            });
        }
    });

    return justifyCenter;
}, {
    requires:['editor', './justify-center/cmd']
});

