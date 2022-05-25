import { Fiber } from "../type.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const Header: Fiber = async () => {
    const document = new DOMParser().parseFromString("", "text/html");
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    const h1Text = document.createTextNode("捻れたバベル");
    h1.appendChild(h1Text);
    header.appendChild(h1);
    return header;
};

export default Header;
