System.register(['angular2/platform/browser', 'angular2/core', "angular2/router", "./jstree.component", "./ap.component"], function(exports_1, context_1) {
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
    var browser_1, core_1, router_1, core_2, jstree_component_1, ap_component_1;
    var BootComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (jstree_component_1_1) {
                jstree_component_1 = jstree_component_1_1;
            },
            function (ap_component_1_1) {
                ap_component_1 = ap_component_1_1;
            }],
        execute: function() {
            // import { TreeComponent } from 'angular2-tree-component';    //tree component
            BootComponent = (function () {
                function BootComponent() {
                }
                BootComponent = __decorate([
                    core_1.Component({
                        selector: 'my-selector',
                        directives: [jstree_component_1.JsTreeComponent, router_1.ROUTER_DIRECTIVES, router_1.RouterLink],
                        template: "<br/> <h1>Tree View</h1>\n              <button [routerLink]=\"['JsTreeLib']\">JsTree With Lib</button>\n              <button  [routerLink]=\"['JsTree']\">JsTree With JS</button>\n              <router-outlet></router-outlet>"
                    }),
                    router_1.RouteConfig([
                        { path: "/jstreelib", name: "JsTreeLib", component: jstree_component_1.JsTreeComponent },
                        { path: "/jstreeJS", name: "JsTree", component: ap_component_1.AppComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], BootComponent);
                return BootComponent;
            }());
            exports_1("BootComponent", BootComponent); // controller
            browser_1.bootstrap(BootComponent, [
                router_1.ROUTER_PROVIDERS,
                core_2.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map