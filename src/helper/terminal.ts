import { divTerminal, divLog, inputCommandline } from "./htmlElements.js";

class Terminal {

    show() {
        divTerminal.style.display = "block";
        inputCommandline.focus();
    }
    hide() {
        divTerminal.style.display = "none";
    }
    toggleDisplay() {
        if (divTerminal.style.display === "none") {
            this.show();
        } else {
            this.hide();
        }
    }

    log(...data: any[]) {
        let txt = '';
        data.forEach(element => {
            if (txt.length > 0) txt += "; ";
           txt += element;
        })
        const p = document.createElement("p");
        p.innerHTML = txt;
        divLog.appendChild(p);
        divLog.scrollTop = divLog.scrollHeight;
    }
}
export const terminal = new Terminal();
