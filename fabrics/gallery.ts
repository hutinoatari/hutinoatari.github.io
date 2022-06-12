import { document, Fabric } from "../loom.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import Header from "../fibers/Header.ts";
import Footer from "../fibers/Footer.ts";
import { getData } from "../libs/microcms.ts";
import Head from "../fibers/Head.ts";

const GalleryPage: Fabric<{}> = async ({ currentURL }) => {
    const from = currentURL.slice(4);
    const head = await Head({ titleName: "GALLERY | 捻れたバベル", from });

    const header = await Header(currentURL);
    const main = document.createElement("main");
    const h2 = document.createElement("h2");
    h2.textContent = "GALLERY";
    main.appendChild(h2);
    const apikey = config().API_KEY ?? Deno.env.get("API_KEY");
    const h31 = document.createElement("h3");
    h31.textContent = "TAG";
    const contents1 = (await getData({
        endpoint: "tags",
    })).contents;
    const tagUl = document.createElement("ul");
    for (const content of contents1) {
        const tagLi = document.createElement("li");
        const tagA = document.createElement("a");
        tagA.setAttribute("href", `./gallery/tag/${content.id}.html`);
        tagA.textContent = content.name;
        tagLi.appendChild(tagA);
        tagUl.appendChild(tagLi);
    }
    main.appendChild(h31);
    main.appendChild(tagUl);
    const h32 = document.createElement("h3");
    h32.textContent = "WORK";
    const contents2 = (await getData({
        endpoint: "works",
        options: [["limit", 1024]],
    })).contents;
    const workUl = document.createElement("ul");
    for (const content of contents2) {
        const workLi = document.createElement("li");
        const workA = document.createElement("a");
        workA.setAttribute("href", `./gallery/${content.id}.html`);
        workA.textContent = content.name;
        workLi.appendChild(workA);
        const p = document.createElement("p");
        p.textContent = content.description;
        workUl.appendChild(workLi);
        workUl.appendChild(p);
    }
    main.appendChild(h32);
    main.appendChild(workUl);
    const footer = await Footer();

    return {
        head: Array.from(head.childNodes),
        body: [header, main, footer],
    };
};

export default GalleryPage;
