import {Component} from "angular2/core";

@Component({
    template:`<div id="jstree"></div>`
})
export class JsTreeComponent {
    tree = [];
    constructor() {

        this.tree = [
            { "id": "192.168.0.0", "parent": "#", "text": "192.168.0.0" },
            { "id": "192.168.0.1", "parent": "192.168.0.0", "text": "192.168.0.1" },
            { "id": "192.168.2.1", "parent": "192.168.0.1", "text": "192.168.2.1", "icon": "/" },
            { "id": "192.168.10.0", "parent": "#", "text": "192.168.10.0" },
            { "id": "192.168.10.1", "parent": "192.168.10.0", "text": "192.168.10.1" },
            { "id": "192.168.20.0", "parent": "#", "text": "192.168.20.0" },
            { "id": "192.168.20.1", "parent": "192.168.20.0", "text": "192.168.20.1" },
        ];

        $('#jstree').jstree({
            'core': {
                'data': this.tree
            }
        });

        // 7 bind to events triggered on the tree
        $('#jstree').on("changed.jstree", function(e, data) {
            console.log(data.selected);
        });
        // 8 interact with the tree - either way is OK
        $('#button1').on('click', function() {
            $('#jstree').jstree(true).select_node('child_node_1');
            $('#jstree').jstree('select_node', 'child_node_1');
            $.jstree.reference('#jstree').select_node('child_node_1');
        });
        $('#button2').on('click', function() {
            $('#jstree').jstree(true).select_node('child_node_2');
            $('#jstree').jstree('select_node', 'child_node_2');
            $.jstree.reference('#jstree').select_node('child_node_2');
        });
    }

}
