import {bootstrap}    from 'angular2/platform/browser';     //for bootstraping
import {Component} from 'angular2/core';                    //for components

@Component({
    selector: 'my-selector',
    template: '<br/> <h1>Angular 2 Hello World App</h1>'
})
export class AppComponent { }



bootstrap(AppComponent);