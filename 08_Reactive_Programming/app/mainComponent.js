System.register(['angular2/core', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, Rx_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                    //this.tasks = new Observable(observer => this._tasksObserver = observer);
                    this.tasks = new Rx_1.Observable(function (observer) {
                        console.log('Print observer: ', observer);
                        this._tasksObserver = observer;
                    });
                }
                MainComponent.prototype.test = function () {
                    this._tasksObserver.next('test');
                };
                MainComponent.prototype.test2 = function () {
                    this._tasksObserver.next('test2');
                };
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'main-selector',
                        template: "\n                <h2>Render from my Main Component (1st Component)</h2>\n               <button (click)=\"test();\" >test</button>\n               <button (click)=\"test2();\" >test2</button> \n            ",
                        providers: ['']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});
//# sourceMappingURL=mainComponent.js.map