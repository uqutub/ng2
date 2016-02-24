import {Component} from 'angular2/core';                    //for components
import {SecondComponent} from './secondComponent';

@Component({
    selector: 'main-selector',
    template: `<br/> <h2>Render from my Main Component (1st Component)</h2> <p><br/></p> 
                <div>
                    <second-selector *ngFor="#t of todos" [singleTodo]="t" (deleteEvent)="deleteTodo($event)" (completeEvent)="completeTodo($event)">Loading...</second-selector>
                </div>`,
    directives: [SecondComponent]
})
export class MainComponent { 
    //from Main-Component will pass single todo to render from Second-Component
    
    todos: todoType[] = [];      //array of todos
    
    constructor () {
        for (var i = 1; i <= 10; i++) {
            this.todos.push({name: 'todo '+i, active: false});
        }    
    }
    
    deleteTodo (todo) {
        console.log('parent main component', todo);
        this.todos.splice(todo, 1);
    }
    
    completeTodo (todo) {
         for (var i = 1; i <= 10; i++) {
             if(this.todos[i] == todo){
                this.todos[i].active = true; 
             }
        }   
        
        // this.todos.forEach(function(obj, index){
        //     if(obj == todo){
        //         console.log('matched');
        //         this.todos[index].active = true;
        //     }
        // })
    }
    
    
}


export type todoType = {
    name: string,
    active: boolean
}