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
var CordovaWinTS;
(function (CordovaWinTS) {
    'use strict';
    var ViewLoader = (function () {
        function ViewLoader(uri, targetId) {
            targetId.innerHTML = "";
            if (uri !== null && targetId !== null) {
                WinJS.UI.Fragments.renderCopy(uri, targetId).done(function () {
                    WinJS.UI.processAll(targetId);
                    console.log('Fragmento Cargado.');
                }, function (error) {
                    console.log("El Fragmento no Pudo ser Cargado.");
                });
            }
            else {
                console.log("El Uri o el TargetId no estan definidos.");
            }
        }
        Object.defineProperty(ViewLoader.prototype, "pageUri", {
            get: function () {
                return this._pageUri;
            },
            set: function (uri) {
                this._pageUri = uri;
            },
            enumerable: true,
            configurable: true
        });
        ViewLoader.prototype.renderFragment = function (targetDiv) {
            document.getElementById('content').innerText = "";
            return WinJS.UI.Fragments.render(this.pageUri, targetDiv);
        };
        ViewLoader.prototype.renderFragmentCopy = function (targetDiv) {
            document.getElementById('content').innerText = "";
            return WinJS.UI.Fragments.renderCopy(this.pageUri, targetDiv);
        };
        return ViewLoader;
    })();
    CordovaWinTS.ViewLoader = ViewLoader;
})(CordovaWinTS || (CordovaWinTS = {}));
/// <reference path="./index.ts"/>
/// <reference path="./viewloader.ts"/>
/// <reference path="./main.ts"/> 
/// <reference path="./references.ts"/>
var CordovaWinTS;
(function (CordovaWinTS) {
    'use strict';
    var content = document.getElementById('content');
    var viewLoader = new CordovaWinTS.ViewLoader("./templates/home.html", content);
    WinJS.Namespace.define("index", {
        navigate: WinJS.UI.eventHandler(function (ev) {
            var control = ev.currentTarget.winControl;
            switch (control.id) {
                case 'home':
                    viewLoader.pageUri = "./templates/home.html";
                    viewLoader.renderFragmentCopy(content).done(function () {
                        WinJS.UI.processAll(content);
                    }, function (error) {
                        console.log("No se pudo cargar el Fragmento");
                    }, function () {
                    });
                    ;
                    break;
                case 'grupos':
                    viewLoader.pageUri = "./templates/grupos.html";
                    viewLoader.renderFragment(content).done(function () {
                        WinJS.UI.processAll(content);
                    }, function (error) {
                        console.log("No se pudo cargar el Fragmento");
                    }, function () {
                    });
                    break;
                case 'settings':
                    viewLoader.pageUri = "./templates/settings.html";
                    viewLoader.renderFragmentCopy(content).done(function () {
                        WinJS.UI.processAll(content).done(function () {
                            function cambiarTema(ev) {
                                ev.preventDefault();
                                var radios = document.getElementsByName('theme');
                                var bootstrapcss = document.getElementById('bootstrapcss');
                                var winjscss = document.getElementById('winjscss');
                                var splitview = document.querySelector('.splitView');
                                for (var i = 0; i < radios.length; i++) {
                                    if (radios[i].checked && radios[i].value === "white") {
                                        console.log('white');
                                        bootstrapcss.href = "css/bootstrap-light.css";
                                        winjscss.href = "scripts/WinJS/css/ui-light.css";
                                    }
                                    else if (radios[i].checked && radios[i].value === "black") {
                                        console.log('black');
                                        bootstrapcss.href = "css/bootstrap-dark.css";
                                        winjscss.href = "scripts/WinJS/css/ui-dark.css";
                                    }
                                }
                            }
                            var settingsForm = document.getElementById('settingsForm');
                            settingsForm.onsubmit = cambiarTema;
                        });
                    }, function (error) {
                        console.log("No se pudo cargar el Fragmento");
                    }, function () {
                    });
                    break;
                default:
                    viewLoader.renderFragment(content);
                    break;
            }
        })
    });
    var foto = 'images/new.png';
    //Creamos WinJS.Binding.List([]); para poder enlazarlo al control en HTML
    //Para crear una WinJS.Binding.List se necesita hacerlo con un arreglo.
    var tsm51 = new WinJS.Binding.List([
        { icono: foto, nombre: 'Fabian ', apellido: ' Mijares', promedio: 9.8 },
        { icono: foto, nombre: 'Erick ', apellido: ' Mejia', promedio: 9.0 },
        { icono: foto, nombre: 'Estela ', apellido: ' Ramirez', promedio: 10.0 },
        { icono: foto, nombre: 'Mayra ', apellido: ' Esplenda', promedio: 8.5 },
        { icono: foto, nombre: 'Julian ', apellido: ' Lopez', promedio: 8.8 }
    ]);
    var tsm52 = new WinJS.Binding.List([
        { icono: foto, nombre: 'Maximiliano ', apellido: ' Fernandez', promedio: 8.0 },
        { icono: foto, nombre: 'Gabriel ', apellido: ' Uriarte', promedio: 9.4 },
        { icono: foto, nombre: 'Gabriela ', apellido: ' Uriarte', promedio: 9.3 },
        { icono: foto, nombre: 'Alexander ', apellido: ' Great', promedio: 8.0 },
        { icono: foto, nombre: 'Ivette ', apellido: ' Macias', promedio: 10.0 }
    ]);
    var tsm53 = new WinJS.Binding.List([
        { icono: foto, nombre: 'Esperanza ', apellido: ' Wergzik', promedio: 7.0 },
        { icono: foto, nombre: 'Efren ', apellido: ' Lopez', promedio: 10.0 },
        { icono: foto, nombre: 'Derek ', apellido: ' Deck', promedio: 10.0 },
        { icono: foto, nombre: 'Fausto ', apellido: ' Podlosky', promedio: 9.0 },
        { icono: foto, nombre: 'Ermenegildo ', apellido: ' YL3', promedio: 8.5 }
    ]);
    var tsm54 = new WinJS.Binding.List([
        { icono: foto, nombre: 'Jocelyn ', apellido: ' Perez', promedio: 8.9 },
        { icono: foto, nombre: 'Javier ', apellido: ' Martinez', promedio: 9.4 },
        { icono: foto, nombre: 'Esmeralda ', apellido: ' Robles', promedio: 8.6 },
        { icono: foto, nombre: 'Andres ', apellido: ' Bemol', promedio: 10.0 },
        { icono: foto, nombre: 'Laura ', apellido: ' Hinojos', promedio: 8.9 }
    ]);
    var tsm55 = new WinJS.Binding.List([
        { icono: foto, nombre: 'Josue ', apellido: ' Pedroza', promedio: 6.0 },
        { icono: foto, nombre: 'Francisco ', apellido: ' Portillo', promedio: 7.0 },
        { icono: foto, nombre: 'Amanda ', apellido: ' Barra', promedio: 7.0 },
        { icono: foto, nombre: 'Ximena ', apellido: ' Galavio', promedio: 10.0 },
        { icono: foto, nombre: 'Fernanda ', apellido: ' Williams', promedio: 10.0 }
    ]);
    //hacemos publicas las listas dentro de una especie de variable global Llamada Grupos.
    WinJS.Namespace.define("Grupos", {
        TSM51: tsm51,
        TSM52: tsm52,
        TSM53: tsm53,
        TSM54: tsm54,
        TSM55: tsm55
    });
})(CordovaWinTS || (CordovaWinTS = {}));
//# sourceMappingURL=appBundle.js.map