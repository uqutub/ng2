System.register(['angular2/core', './secondComponent'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, secondComponent_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (secondComponent_1_1) {
                secondComponent_1 = secondComponent_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                    //from Main-Component will pass single todo to render from Second-Component
                    this.todos = []; //array of todos
                    for (var i = 1; i <= 10; i++) {
                        this.todos.push({ name: 'todo ' + i, active: false });
                    }
                }
                MainComponent.prototype.deleteTodo = function (todo) {
                    console.log('parent main component', todo);
                    this.todos.splice(todo, 1);
                };
                MainComponent.prototype.completeTodo = function (todo) {
                    for (var i = 1; i <= 10; i++) {
                        if (this.todos[i] == todo) {
                            this.todos[i].active = true;
                        }
                    }
                    // this.todos.forEach(function(obj, index){
                    //     if(obj == todo){
                    //         console.log('matched');
                    //         this.todos[index].active = true;
                    //     }
                    // })
                };
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'main-selector',
                        template: "<br/> <h2>Render from my Main Component (1st Component)</h2> <p><br/></p> \n                <div>\n                    <second-selector *ngFor=\"#t of todos\" [singleTodo]=\"t\" (deleteEvent)=\"deleteTodo($event)\" (completeEvent)=\"completeTodo($event)\">Loading...</second-selector>\n                </div>",
                        directives: [secondComponent_1.SecondComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            })();
            exports_1("MainComponent", MainComponent);
        }
    }
});
//# sourceMappingURL=mainComponent.js.map