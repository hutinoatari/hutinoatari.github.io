import { Fabric } from "../type.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const AboutPage: Fabric = async () => {
    const document = new DOMParser().parseFromString("", "text/html");
    const title = document.createElement("title");
    title.appendChild(document.createTextNode("ABOUT | 捻れたバベル"));
    const h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("ABOUT"));
    const p = document.createElement("p");
    p.appendChild(document.createTextNode("準備中......"));

    return {
        head: title,
        body: [h2, p],
    };
};

export default AboutPage;
