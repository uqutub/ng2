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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.nodes = [
                        {
                            name: '192.168.0.0',
                            children: [
                                { name: '192.168.0.1' },
                                { name: '192.168.0.2' }
                            ]
                        },
                        {
                            name: '172.12.0.0',
                            children: [
                                { name: '172.12.0.1' },
                                {
                                    name: '172.12.0.2',
                                    children: [
                                        { name: '172.12.1.1' }
                                    ]
                                }
                            ]
                        }
                    ];
                    this.tree = [];
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.tree = [{
                            id: 0,
                            name: "192.168.0.0"
                        }, {
                            id: 1,
                            name: "192.168.1.0"
                        }, {
                            id: 2,
                            name: "192.168.2.0",
                            child: [{
                                    id: 3,
                                    name: "192.168.2.1"
                                }, {
                                    id: 4,
                                    name: "192.168.2.2"
                                },]
                        }, {
                            id: 5,
                            name: "192.168.3.0",
                            child: [{
                                    id: 6,
                                    name: "192.168.3.1"
                                }, {
                                    id: 7,
                                    name: "192.168.3.2"
                                },]
                        }, {
                            id: 8,
                            name: "192.168.4.0"
                        },];
                    this.html = this.LoadTree(this.tree);
                    document.getElementById("treenode").innerHTML = this.html;
                };
                AppComponent.prototype.LoadTree = function (P) {
                    var _this = this;
                    var _html = "";
                    if (P.length > 0) {
                        P.forEach(function (val, indx) {
                            var _icon = (val.child && val.child.length > 0) ? "+ &nbsp;" : "- &nbsp;";
                            _html += "<div style='margin-top:6px;'> <span id='" + val.id + "'><span id='" + val.id + "i' (click)='onPress(this)' class='true'>  " + _icon + " </span>" + val.name + "</span><div id='" + val.id + "c'  style='display:none;'>";
                            if (val.child && val.child.length > 0) {
                                _html += _this.RenderChild(val.child);
                            }
                            _html += "</div></div>";
                        });
                        return _html;
                    }
                    return "No Tree Found";
                };
                AppComponent.prototype.RenderChild = function (C) {
                    var _this = this;
                    var _html = "";
                    C.forEach(function (val, indx) {
                        _html += "<div id='" + val.id + "' style='color:green;'>&nbsp; &nbsp; &nbsp; " + val.name;
                        if (val.child && val.child.length > 0) {
                            _html += _this.RenderChild(val.child);
                        }
                        _html += "</div>";
                    });
                    return _html;
                };
                AppComponent.prototype.onPress = function (a) {
                    if (a) {
                        var _iconId = a.getAttribute("id");
                        var _divId = _iconId.match(/\d+/)[0];
                        if (a.getAttribute("class").indexOf("true") >= 0) {
                            (document.getElementById(_iconId).innerHTML = "- &nbsp;");
                            a.setAttribute("class", "false");
                            document.getElementById(_divId + "c").setAttribute("style", "display:block;");
                        }
                        else {
                            (document.getElementById(_iconId).innerHTML = "+ &nbsp;");
                            a.setAttribute("class", "true");
                            document.getElementById(_divId + "c").setAttribute("style", "display:none;");
                        }
                    }
                };
                __decorate([
                    core_1.HostListener('click', ['$event.target']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], AppComponent.prototype, "onPress", null);
                AppComponent = __decorate([
                    core_1.Component({
                        template: "  <div id=\"treenode\"></div>",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=ap.component.js.map