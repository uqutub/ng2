import {Component, HostListener} from "angular2/core";

@Component({
  template: `  <div id="treenode"></div>`,
})

export class AppComponent {
  nodes = [
      {
          name: '192.168.0.0',
          children: [
              { name: '192.168.0.1' },
              { name: '192.168.0.2' }
          ]
      },
      {
          name: '172.12.0.0',
          children: [
              { name: '172.12.0.1' },
              {
                  name: '172.12.0.2',
                  children: [
                      { name: '172.12.1.1' }
                  ]
              }
          ]
      }
  ];
  tree = [];
  html: string;
  constructor() {

  }
  ngOnInit() {
      this.tree = [{
          id: 0,
          name: "192.168.0.0"
      }, {
              id: 1,
              name: "192.168.1.0"
          }, {
              id: 2,
              name: "192.168.2.0",
              child: [{
                  id: 3,
                  name: "192.168.2.1"
              }, {
                      id: 4,
                      name: "192.168.2.2"
                  },]
          }, {
              id: 5,
              name: "192.168.3.0",
              child: [{
                  id: 6,
                  name: "192.168.3.1"
              }, {
                      id: 7,
                      name: "192.168.3.2"
                  },]
          }, {
              id: 8,
              name: "192.168.4.0"
          },];

      this.html = this.LoadTree(this.tree);
      document.getElementById("treenode").innerHTML = this.html;
  }


  LoadTree(P) {
      let _html = "";
      if (P.length > 0) {
          P.forEach((val, indx) => {
              let _icon = (val.child && val.child.length > 0) ? "+ &nbsp;" : "- &nbsp;";
              _html += "<div style='margin-top:6px;'> <span id='" + val.id + "'><span id='" + val.id + "i' (click)='onPress(this)' class='true'>  " + _icon + " </span>" + val.name + "</span><div id='" + val.id + "c'  style='display:none;'>";
              if (val.child && val.child.length > 0) {
                  _html += this.RenderChild(val.child);
              }
              _html += "</div></div>";
          });
          return _html;
      }
      return "No Tree Found";
  }

  RenderChild(C) {
      var _html = "";
      C.forEach((val, indx) => {
          _html += "<div id='" + val.id + "' style='color:green;'>&nbsp; &nbsp; &nbsp; " + val.name;
          if (val.child && val.child.length > 0) {
              _html += this.RenderChild(val.child);
          }
          _html += "</div>";
      });
      return _html;
  }

  @HostListener('click', ['$event.target'])

  onPress(a) {
    if(a){
      let _iconId = a.getAttribute("id");
      let _divId = _iconId.match(/\d+/)[0]
      if (a.getAttribute("class").indexOf("true") >= 0) { // if true
          (document.getElementById(_iconId).innerHTML = "- &nbsp;");
          a.setAttribute("class", "false");
          document.getElementById(_divId + "c").setAttribute("style", "display:block;");
      } else {
          (document.getElementById(_iconId).innerHTML = "+ &nbsp;");
          a.setAttribute("class", "true");
          document.getElementById(_divId + "c").setAttribute("style", "display:none;");
      }
  }
}

}
