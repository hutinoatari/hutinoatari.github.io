import { document, Fabric } from "../loom.ts";
import Header from "../fibers/Header.ts";
import Footer from "../fibers/Footer.ts";

const AboutPage: Fabric<{}> = async ({ currentURL }) => {
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
    const link = document.createElement("link");
    link.setAttribute("href", "./style.css");
    link.setAttribute("rel", "stylesheet");

    const header = await Header(currentURL);
    const main = document.createElement("main");
    const h2 = document.createElement("h2");
    h2.textContent = "ABOUT";
    const p = document.createElement("p");
    p.textContent = "準備中......";
    main.appendChild(p);
    const footer = await Footer();

    return {
        head: [charsetMeta, viewportMeta, generatorMeta, title, link],
        body: [header, main, footer],
    };
};

export default AboutPage;
