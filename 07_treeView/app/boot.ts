import {bootstrap}    from 'angular2/platform/browser';     // for bootstraping
import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, RouterLink, RouterOutlet, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from "angular2/router";
import {provide, ComponentRef} from "angular2/core";
import {JsTreeComponent} from "./jstree.component";
import {AppComponent} from "./ap.component";

// import { TreeComponent } from 'angular2-tree-component';    //tree component

@Component({
    selector: 'my-selector',
    directives: [JsTreeComponent, ROUTER_DIRECTIVES, RouterLink],
    template: `<br/> <h1>Tree View</h1>
              <button [routerLink]="['JsTreeLib']">JsTree With Lib</button>
              <button  [routerLink]="['JsTree']">JsTree With JS</button>
              <router-outlet></router-outlet>`
})
@RouteConfig([
  {path: "/jstreelib", name: "JsTreeLib", component: JsTreeComponent},
  {path: "/jstreeJS", name: "JsTree", component: AppComponent}
])

export class BootComponent {

    // onPress() {
    //     alert(1)
    //     console.log(22);
    //     let a;
    //     let _iconId = a.getAttribute("id");
    //     let _divId = _iconId.match(/\d+/)[0]
    //     if (a.getAttribute("class").indexOf("true") >= 0) { //if true
    //         (document.getElementById(_iconId).innerHTML = "- &nbsp;");
    //         a.setAttribute("class", "false");
    //         document.getElementById(_divId + "c").setAttribute("style", "display:block;");
    //     } else {
    //         (document.getElementById(_iconId).innerHTML = "+ &nbsp;");
    //         a.setAttribute("class", "true");
    //         document.getElementById(_divId + "c").setAttribute("style", "display:none;");
    //     }
    // } // on Press

} // controller



bootstrap(BootComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy})
  ])
