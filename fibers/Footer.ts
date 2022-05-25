import { Fiber } from "../type.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const Footer: Fiber = async () => {
    const document = new DOMParser().parseFromString("", "text/html");
    const footer = document.createElement("footer");
    const p = document.createElement("p");
    const small = document.createElement("small");
    small.appendChild(document.createTextNode("(C)2021 淵野アタリ"));
    p.appendChild(small);
    footer.appendChild(p);
    return footer;
};

export default Footer;
