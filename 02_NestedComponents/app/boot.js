System.register(['angular2/platform/browser', './mainComponent'], function(exports_1) {
    var browser_1, mainComponent_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (mainComponent_1_1) {
                mainComponent_1 = mainComponent_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(mainComponent_1.MainComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map