import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
const document = new DOMParser().parseFromString("", "text/html");

export interface Fabric {
    name: string;
    options?: [string, string][];
    children: Fabric[] | string;
}

const weave = (fabric: Fabric) => {
    const element = document.createElement(fabric.name);
    if (fabric.options) {
        for (const [key, value] of fabric.options) {
            element.setAttribute(key, value);
        }
    }
    if (Array.isArray(fabric.children)) {
        for (const child of fabric.children) {
            element.appendChild(weave(child));
        }
    } else {
        element.innerHTML = fabric.children;
    }
    return element;
};

export { document, weave };
