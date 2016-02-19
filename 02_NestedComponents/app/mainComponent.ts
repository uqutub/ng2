import {Component} from 'angular2/core';                    //for components
import {SecondComponent} from './secondComponent';

@Component({
    selector: 'main-selector',
    template: '<br/> <h2>Render from my Main Component (1st Component)</h2> <p><br/></p> <second-selector>Loading...</second-selector>',
    directives: [SecondComponent]
})
export class MainComponent { }