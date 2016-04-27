import {bootstrap}    from 'angular2/platform/browser';     //for bootstraping
import {Component} from 'angular2/core';                    //for components

import {SampleService} from './sampleService';          //import service

@Component({
    selector: 'main-selector',
    template: `<br/> <h3>Main Component</h3>
                <ul><li *ngFor="#v of myList">{{v}}</li></ul>`,
    providers: [SampleService]
})
export class MainComponent {
    myList: string[];
    
    constructor(public myService: SampleService) {
            this.myList = myService.getSampleData();  
    } 
    
}



bootstrap(MainComponent);