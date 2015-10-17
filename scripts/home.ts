module CordovaWinTS
{
    export class HomeViewManager
    {
        _targetDiv: HTMLElement;
        _pageUri: string;

        constructor(uri?:string, targetId?:HTMLElement){
            if (uri !== null && targetId !== null){
                WinJS.UI.Fragments.renderCopy(uri, targetId).done(
                    () => {
                        console.log('Fragmento Cargado');
                    },
                    (error) => {
                        console.log("El Fragmento no Pudo ser Cargado");
                    });
            }
            else {
                console.log("{}")
            }
        }

        get targetDiv(): HTMLElement
        {
            return this._targetDiv;
        }

        set targetDiv(div:HTMLElement)
        {
            this._targetDiv = div
        }

        get pageUri(): string
        {
            return this._pageUri;
        }

        set pageUri(uri: string)
        {
            this._pageUri = uri;
        }

        renderFragment()
        {
            this.targetDiv.innerHTML = "";
            WinJS.UI.Fragments.renderCopy(this.pageUri, this.targetDiv).done(
                () => {
                    console.log('Fragmento Cargado');
                },
                (error) => {
                    console.log("El Fragmento no Pudo ser Cargado");
                });
        }
    }

}
