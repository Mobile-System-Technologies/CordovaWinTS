var CordovaWinTS;
(function (CordovaWinTS) {
    var HomeViewManager = (function () {
        function HomeViewManager() {
        }
        return HomeViewManager;
    })();
    CordovaWinTS.HomeViewManager = HomeViewManager;
})(CordovaWinTS || (CordovaWinTS = {}));
// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var CordovaWinTS;
(function (CordovaWinTS) {
    "use strict";
    var Application;
    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
            WinJS.UI.processAll();
        }
        function onPause() {
            // TODO: This application has been suspended. Save application state here.
        }
        function onResume() {
            // TODO: This application has been reactivated. Restore application state here.
        }
    })(Application = CordovaWinTS.Application || (CordovaWinTS.Application = {}));
    window.onload = function () {
        Application.initialize();
    };
})(CordovaWinTS || (CordovaWinTS = {}));
/// <reference path="./index.ts"/>
/// <reference path="./home.ts"/> 
//# sourceMappingURL=appBundle.js.map