import {Component} from 'angular2/core';                    //for components
import {todoType} from './mainComponent';
import { EventEmitter } from "angular2/core" ;              //import event emiter .. send event from child to parent....

@Component({
    selector: 'second-selector',
    template: `<br/> <h3>Render from my Second Component (2nd Component)</h3> 
                {{singleTodo.name}} -- <input type="checkbox" [(ngModel)]="singleTodo.active"> -- 
                <input type="button" value="Delete" (click)="delete()"> --
                <input type="button" value="Completed" (click)="done()">`,
    inputs: ['singleTodo'],
    outputs : ['deleteEvent', 'completeEvent'],
})
export class SecondComponent { 
    singleTodo: todoType;    //single task object
    deleteEvent : EventEmitter<todoType>;
    completeEvent : EventEmitter<todoType>;
    
    constructor(){
        this.deleteEvent = new EventEmitter();
        this.completeEvent = new EventEmitter();
    }
    
    delete(){
        console.log("curTdo");
        console.log(this.singleTodo);
        
        this.deleteEvent.emit(this.singleTodo);
	}
    
    done(){
        this.completeEvent.emit(this.singleTodo);
    }
    
}