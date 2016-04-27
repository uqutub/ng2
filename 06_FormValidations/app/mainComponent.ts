import {Component} from 'angular2/core';                    //for components
import { FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup } from 'angular2/common';
import { emailValidator, matchingPasswords } from './validators';

@Component({
    selector: 'main-selector',
    templateUrl: '/app/mainComponent.html',
    directives: [FORM_DIRECTIVES, ]

})
export class MainComponent {

    registrationForm: ControlGroup;

    constructor(fb: FormBuilder) {
        // Example use of FormBuilder, ControlGroups, and Controls
        this.registrationForm = fb.group({
                dob: ['', Validators.required],
                email: ['', Validators.compose([Validators.required, emailValidator])],
                password: ['', Validators.required],
                confirmPassword: ['', Validators.required],
                firstName: ['', Validators.required],
                lastName: ['', Validators.required]
            }, 
            { validator: matchingPasswords('password', 'confirmPassword') 
        }); //this.registrationForm

    } //constructor
  
  
    submitRegistration(value: Object): void {
        console.log(value);
    }

}