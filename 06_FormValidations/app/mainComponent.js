System.register(['angular2/core', 'angular2/common', './validators'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, validators_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (validators_1_1) {
                validators_1 = validators_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent(fb) {
                    // Example use of FormBuilder, ControlGroups, and Controls
                    this.registrationForm = fb.group({
                        dob: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.compose([common_1.Validators.required, validators_1.emailValidator])],
                        password: ['', common_1.Validators.required],
                        confirmPassword: ['', common_1.Validators.required],
                        firstName: ['', common_1.Validators.required],
                        lastName: ['', common_1.Validators.required]
                    }, { validator: validators_1.matchingPasswords('password', 'confirmPassword')
                    }); //this.registrationForm
                } //constructor
                MainComponent.prototype.submitRegistration = function (value) {
                    console.log(value);
                };
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'main-selector',
                        templateUrl: '/app/mainComponent.html',
                        directives: [common_1.FORM_DIRECTIVES,]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], MainComponent);
                return MainComponent;
            })();
            exports_1("MainComponent", MainComponent);
        }
    }
});
//# sourceMappingURL=mainComponent.js.map