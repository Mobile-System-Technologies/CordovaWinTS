module CordovaWinTS
{
    export class HomeViewManager
    { 
        _targetDiv: string;
        _pageUri: string;


        get targetDiv(): string
        {
            return this._targetDiv;
        }

        set targetDiv(div:string)
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

        }
    }

}