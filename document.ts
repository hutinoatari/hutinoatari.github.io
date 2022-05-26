import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import { Document } from "./type.ts";
import Header from "./fibers/Header.ts";
import Footer from "./fibers/Footer.ts";

const Page: Document = async (head, body) => {
    const document = new DOMParser().parseFromString("", "text/html");
    const html = document.createElement("html");
    html.setAttribute("lang", "ja");
    const headPart = document.createElement("head");
    head.forEach((e) => headPart.appendChild(e));
    const bodyPart = document.createElement("body");
    const header = await Header();
    const footer = await Footer();
    const main = document.createElement("main");
    body.forEach((e) => main.appendChild(e));
    bodyPart.appendChild(header);
    bodyPart.appendChild(main);
    bodyPart.appendChild(footer);
    html.appendChild(headPart);
    html.appendChild(bodyPart);
    return html;
};

export { Page };
