module CordovaWinTS
{
    'use strict';
    export class ViewLoader
    {
        _pageUri: string;

        constructor(uri: string, targetId: HTMLElement)
        {
            targetId.innerHTML = "";
            if (uri !== null && targetId !== null){
                WinJS.UI.Fragments.renderCopy(uri, targetId).done(
                    () =>
                    {
                        WinJS.UI.processAll(targetId);
                        console.log('Fragmento Cargado.');
                    },
                    (error) => {
                        console.log("El Fragmento no Pudo ser Cargado.");
                    });
            }
            else {
                console.log("El Uri o el TargetId no estan definidos.")
            }
        }

        get pageUri(): string
        {
            return this._pageUri;
        }

        set pageUri(uri: string)
        {
            this._pageUri = uri;
        }

        renderFragment(targetDiv: HTMLElement)
        {
            document.getElementById('content').innerText = "";
            return WinJS.UI.Fragments.render(this.pageUri, targetDiv);
        }
        renderFragmentCopy(targetDiv: HTMLElement)
        {
            document.getElementById('content').innerText = "";
            return WinJS.UI.Fragments.renderCopy(this.pageUri, targetDiv);
        }
    }

}
