import { Fabric } from "../type.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import Header from "../fibers/Header.ts";
import Footer from "../fibers/Footer.ts";

const AboutPage: Fabric = async () => {
    const document = new DOMParser().parseFromString("", "text/html");
    const charsetMeta = document.createElement("meta");
    charsetMeta.setAttribute("charset", "UTF-8");
    const viewportMeta = document.createElement("meta");
    viewportMeta.setAttribute("name", "viewport");
    viewportMeta.setAttribute("content", "width=device-width");
    const generatorMeta = document.createElement("meta");
    generatorMeta.setAttribute("name", "generator");
    generatorMeta.setAttribute(
        "content",
        "Loom (private Static Site Generator)",
    );
    const title = document.createElement("title");
    title.textContent = "ABOUT | 捻れたバベル";

    const header = await Header("/about.html");
    const main = document.createElement("main");
    const h2 = document.createElement("h2");
    h2.textContent = "ABOUT";
    const p = document.createElement("p");
    p.textContent = "準備中......";
    main.appendChild(p);
    const footer = await Footer();

    return {
        head: [charsetMeta, viewportMeta, generatorMeta, title],
        body: [header, main, footer],
    };
};

export default AboutPage;
