import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import { Document } from "./type.ts";
import Header from "./fibers/Header.ts";
import Footer from "./fibers/Footer.ts";

const Page: Document = async (head, body) => {
    const document = new DOMParser().parseFromString("", "text/html");
    const html = document.createElement("html");
    html.setAttribute("lang", "ja");
    const headPart = document.createElement("head");
    if (Array.isArray(head)) {
        head.forEach((e) => headPart.appendChild(e));
    } else {
        headPart.appendChild(head);
    }
    const bodyPart = document.createElement("body");
    const header = await Header();
    const footer = await Footer();
    const main = document.createElement("main");
    if (Array.isArray(body)) {
        body.forEach((e) => main.appendChild(e));
    } else {
        main.appendChild(body);
    }
    bodyPart.appendChild(header);
    bodyPart.appendChild(main);
    bodyPart.appendChild(footer);
    html.appendChild(headPart);
    html.appendChild(bodyPart);
    return html;
};

export { Page };
