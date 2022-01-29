import {render} from "./PageNoteView";
import {PlainData} from "../../../shared/src/@types/Types";
export default class PageNote {
    data: PlainData
    onchange: (data:PlainData)=>void
    constructor(onchange:(data:PlainData)=>void) {
        this.onchange = onchange;
    }



    init(){
        render(this.data,this.onchange)
    }
}
