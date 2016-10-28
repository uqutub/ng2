import {Component} from 'angular2/core';                    //for components
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'main-selector',
    template: `
                <h2>Render from my Main Component (1st Component)</h2>
               <button (click)="test();" >test</button>
               <button (click)="test2();" >test2</button> 
            `,
    providers: ['']
})
export class MainComponent { 
    public tasks: Observable<any>;
    private _tasksObserver: any;

    constructor() {
        //this.tasks = new Observable(observer => this._tasksObserver = observer);
        
        this.tasks = new Observable(function (observer) {
            console.log('Print observer: ', observer);
            this._tasksObserver = observer;
        });
        
    }
    
    test(){
        this._tasksObserver.next('test');
    }
    
    test2(){
        this._tasksObserver.next('test2');
    }
    
    
    
}