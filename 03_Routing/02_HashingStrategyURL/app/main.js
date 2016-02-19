System.register(['angular2/platform/browser', 'angular2/router', 'angular2/core', './home', './about'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, router_1, core_1, router_2, core_2, home_1, about_1;
    var MainComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                }
                MainComponent = __decorate([
                    core_2.Component({
                        selector: 'my-selector',
                        template: "<div><h1>Rendering from my-selector tag</h1></div>\n     <ul>\n      <li><a [routerLink]=\"['/Home']\">Home Link</a></li>\n      <li><a [routerLink]=\"['/About']\">About Link</a></li>\n    </ul>\n    <router-outlet></router-outlet>",
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }),
                    router_2.RouteConfig([
                        { path: '/home', name: 'Home', component: home_1.HomeComponent },
                        { path: '/about', name: 'About', component: about_1.AboutComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            })();
            exports_1("MainComponent", MainComponent);
            browser_1.bootstrap(MainComponent, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map