import { divTerminal, divLog, commandLine } from "./htmlElements.js";

class Terminal {

    show() {
        divTerminal.className = "terminal_visible";
        commandLine.focus();
    }
    hide() {
        if (divTerminal.className !== "terminal_hidden") {

                divTerminal.className = "terminal_hidden";
                commandLine.blur();
            }
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
        this.showLastLine();
    }
    showLastLine() {
        divLog.scrollTop = divLog.scrollHeight;
    }
}
export const terminal = new Terminal();
