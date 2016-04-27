System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var JsTreeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            JsTreeComponent = (function () {
                function JsTreeComponent() {
                    this.tree = [];
                    this.tree = [
                        { "id": "192.168.0.0", "parent": "#", "text": "192.168.0.0" },
                        { "id": "192.168.0.1", "parent": "192.168.0.0", "text": "192.168.0.1" },
                        { "id": "192.168.2.1", "parent": "192.168.0.1", "text": "192.168.2.1", "icon": "/" },
                        { "id": "192.168.10.0", "parent": "#", "text": "192.168.10.0" },
                        { "id": "192.168.10.1", "parent": "192.168.10.0", "text": "192.168.10.1" },
                        { "id": "192.168.20.0", "parent": "#", "text": "192.168.20.0" },
                        { "id": "192.168.20.1", "parent": "192.168.20.0", "text": "192.168.20.1" },
                    ];
                    $('#jstree').jstree({
                        'core': {
                            'data': this.tree
                        }
                    });
                    // 7 bind to events triggered on the tree
                    $('#jstree').on("changed.jstree", function (e, data) {
                        console.log(data.selected);
                    });
                    // 8 interact with the tree - either way is OK
                    $('#button1').on('click', function () {
                        $('#jstree').jstree(true).select_node('child_node_1');
                        $('#jstree').jstree('select_node', 'child_node_1');
                        $.jstree.reference('#jstree').select_node('child_node_1');
                    });
                    $('#button2').on('click', function () {
                        $('#jstree').jstree(true).select_node('child_node_2');
                        $('#jstree').jstree('select_node', 'child_node_2');
                        $.jstree.reference('#jstree').select_node('child_node_2');
                    });
                }
                JsTreeComponent = __decorate([
                    core_1.Component({
                        template: "<div id=\"jstree\"></div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], JsTreeComponent);
                return JsTreeComponent;
            }());
            exports_1("JsTreeComponent", JsTreeComponent);
        }
    }
});
//# sourceMappingURL=jstree.component.js.map