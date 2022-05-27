import { Fiber } from "../type.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import { fromToURL } from "../util/util.ts";

const Header: Fiber = async (url: string) => {
    const document = new DOMParser().parseFromString("", "text/html");
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "捻れたバベル";
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const topLi = document.createElement("li");
    const topA = document.createElement("a");
    topA.textContent = "TOP";
    topA.setAttribute("href", fromToURL(url, "/index.html"));
    topLi.appendChild(topA);
    const aboutLi = document.createElement("li");
    const aboutA = document.createElement("a");
    aboutA.textContent = "ABOUT";
    aboutA.setAttribute("href", fromToURL(url, "/about.html"));
    aboutLi.appendChild(aboutA);
    ul.appendChild(topLi);
    ul.appendChild(aboutLi);
    nav.appendChild(ul);
    header.appendChild(h1);
    header.appendChild(nav);
    return header;
};

export default Header;
