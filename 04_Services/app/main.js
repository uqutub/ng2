System.register(['angular2/platform/browser', 'angular2/core', './sampleService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, sampleService_1;
    var MainComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sampleService_1_1) {
                sampleService_1 = sampleService_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent(myService) {
                    this.myService = myService;
                    this.myList = myService.getSampleData();
                }
                MainComponent = __decorate([
                    //import service
                    core_1.Component({
                        selector: 'main-selector',
                        template: "<br/> <h3>Main Component</h3>\n                <ul><li *ngFor=\"#v of myList\">{{v}}</li></ul>",
                        providers: [sampleService_1.SampleService]
                    }), 
                    __metadata('design:paramtypes', [sampleService_1.SampleService])
                ], MainComponent);
                return MainComponent;
            })();
            exports_1("MainComponent", MainComponent);
            browser_1.bootstrap(MainComponent);
        }
    }
});
//# sourceMappingURL=main.js.map