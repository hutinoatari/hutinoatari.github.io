import { document, Fabric, Nozzle } from "../../loom.ts";
import { cheeseTownToHtml } from "../../libs/cheeseTown.ts";
import Header from "../../fibers/Header.ts";
import Footer from "../../fibers/Footer.ts";
import { getData } from "../../libs/microcms.ts";

const WorkPage: Fabric<{}> = async ({ currentURL, id }) => {
    const work = await getData({
        endpoint: "works",
        id,
    });

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
    title.textContent = `${work.name} | 捻れたバベル`;
    const link = document.createElement("link");
    link.setAttribute("href", "../style.css");
    link.setAttribute("rel", "stylesheet");

    const header = await Header(currentURL);
    const main = document.createElement("main");
    const h2 = document.createElement("h2");
    h2.textContent = work.name;
    const p = document.createElement("p");
    const a = document.createElement("a");
    a.setAttribute("href", `./tag/${work.tag.id}.html`);
    a.textContent = work.tag.name;
    p.appendChild(document.createTextNode("タグ: "));
    p.appendChild(a);
    main.appendChild(p);
    const div1 = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", work.image.url);
    div1.appendChild(img);
    const div2 = document.createElement("div");
    div2.innerHTML = cheeseTownToHtml(work.caption);
    main.appendChild(h2);
    main.appendChild(div1);
    main.appendChild(div2);
    const footer = await Footer();

    return {
        head: [charsetMeta, viewportMeta, generatorMeta, title, link],
        body: [header, main, footer],
    };
};

export const nozzle: Nozzle = async () => {
    const contents = (await getData({
        endpoint: "works",
        options: [["limit", 1024]],
    })).contents;
    const path = contents.map((e) => e.id);
    return path;
};

export default WorkPage;
