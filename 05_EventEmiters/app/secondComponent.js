System.register(['angular2/core', "angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var SecondComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            SecondComponent = (function () {
                function SecondComponent() {
                    this.deleteEvent = new core_2.EventEmitter();
                    this.completeEvent = new core_2.EventEmitter();
                }
                SecondComponent.prototype.delete = function () {
                    console.log("curTdo");
                    console.log(this.singleTodo);
                    this.deleteEvent.emit(this.singleTodo);
                };
                SecondComponent.prototype.done = function () {
                    this.completeEvent.emit(this.singleTodo);
                };
                SecondComponent = __decorate([
                    //import event emiter .. send event from child to parent....
                    core_1.Component({
                        selector: 'second-selector',
                        template: "<br/> <h3>Render from my Second Component (2nd Component)</h3> \n                {{singleTodo.name}} -- <input type=\"checkbox\" [(ngModel)]=\"singleTodo.active\"> -- \n                <input type=\"button\" value=\"Delete\" (click)=\"delete()\"> --\n                <input type=\"button\" value=\"Completed\" (click)=\"done()\">",
                        inputs: ['singleTodo'],
                        outputs: ['deleteEvent', 'completeEvent'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], SecondComponent);
                return SecondComponent;
            })();
            exports_1("SecondComponent", SecondComponent);
        }
    }
});
//# sourceMappingURL=secondComponent.js.map