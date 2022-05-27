import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import { Document } from "./type.ts";

const Page: Document = async (head, body) => {
    const document = new DOMParser().parseFromString("", "text/html");
    const html = document.createElement("html");
    html.setAttribute("lang", "ja");
    const headPart = document.createElement("head");
    head.forEach((e) => headPart.appendChild(e));
    const bodyPart = document.createElement("body");
    body.forEach((e) => bodyPart.appendChild(e));
    html.appendChild(headPart);
    html.appendChild(bodyPart);
    return html;
};

export { Page };
