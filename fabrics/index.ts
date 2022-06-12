import { document, Fabric } from "../loom.ts";
import Header from "../fibers/Header.ts";
import Footer from "../fibers/Footer.ts";
import { getData } from "../libs/microcms.ts";

const TopPage: Fabric<{}> = async ({ currentURL }) => {
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
    title.textContent = "捻れたバベル";
    const link = document.createElement("link");
    link.setAttribute("href", "./style.css");
    link.setAttribute("rel", "stylesheet");

    const header = await Header(currentURL);
    const main = document.createElement("main");
    const p = document.createElement("p");
    p.textContent = "準備中......";
    const contents = (await getData({
        endpoint: "works",
        options: [["limit", 3]],
    })).contents;
    const workUl = document.createElement("ul");
    for (const content of contents) {
        const workLi = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", `./gallery/${content.id}.html`);
        a.textContent = content.name;
        workLi.appendChild(a);
        workUl.appendChild(workLi);
    }
    main.appendChild(p);
    main.appendChild(workUl);
    const footer = await Footer();

    return {
        head: [charsetMeta, viewportMeta, generatorMeta, title, link],
        body: [header, main, footer],
    };
};

export default TopPage;
