import { dom } from "../helper/htmlElements.js";
class Terminal {
    show() {
        dom.terminal.className = "terminal_visible";
        dom.commandLine.focus();
    }
    hide() {
        if (this.isVisible()) {
            dom.terminal.className = "terminal_hidden";
            dom.commandLine.blur();
        }
    }
    toggleDisplay() {
        if (dom.terminal.style.display === "none") {
            this.show();
        }
        else {
            this.hide();
        }
    }
    isVisible() {
        return (dom.terminal.className === "terminal_visible");
    }
    log(...data) {
        let txt = '';
        data.forEach(element => {
            if (txt.length > 0)
                txt += "; ";
            txt += element.toString();
        });
        const p = document.createElement("p");
        p.innerHTML = txt;
        dom.log.appendChild(p);
        this.showLastLine();
    }
    showLastLine() {
        dom.log.scrollTop = dom.log.scrollHeight;
    }
}
export const terminal = new Terminal();
//# sourceMappingURL=terminal.js.map