import { divLog } from "./htmlElements.js";
class Log {
    constructor() {
        this.dom = divLog;
    }
    show() {
        this.dom.style.display = "block";
    }
    hide() {
        this.dom.style.display = "none";
    }
    toggleDisplay() {
        if (this.dom.style.display === "none") {
            this.show();
        }
        else {
            this.hide();
        }
    }
    write(msg) {
        const p = document.createElement("p");
        p.innerHTML = msg;
        this.dom.appendChild(p);
    }
}
export const log = new Log();
//# sourceMappingURL=log.js.map