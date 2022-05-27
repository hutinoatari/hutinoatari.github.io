import { Fiber } from "../type.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import { extname } from "https://deno.land/x/std@0.140.0/path/mod.ts";

const InternalLink: Fiber = async (name: string, url: string) => {
    const document = new DOMParser().parseFromString("", "text/html");
    const a = document.createElement("a");
    a.textContent = name;
    a.setAttribute("href", extname(url) === "" ? `${url}.html` : url);
    return a;
};
const ExternalLink: Fiber = async (name: string, url: string) => {
    const document = new DOMParser().parseFromString("", "text/html");
    const a = document.createElement("a");
    a.textContent = name;
    a.setAttribute("href", url);
    a.setAttribute("target", "_blank");
    return a;
};

export { ExternalLink, InternalLink };
