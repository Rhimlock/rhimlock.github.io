import { divInfo, divLog } from "./htmlElements.js";
import { input } from "./input.js";
class Info {
    show() {
        divInfo.style.display = "block";
    }
    hide() {
        divInfo.style.display = "none";
    }
    toggleDisplay() {
        if (divInfo.style.display === "none") {
            divInfo.style.display = "block";
        }
        else {
            divInfo.style.display = "none";
        }
    }
    write(msg) {
        const p = document.createElement("p");
        p.innerHTML = msg;
        divLog.appendChild(p);
    }
}
export const info = new Info();
input.bindCall(info.toggleDisplay, input.keys.debug);
//# sourceMappingURL=info.js.map