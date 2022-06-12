import { document, Fabric } from "../loom.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { WorkListResponse } from "../types/api.ts";
import Header from "../fibers/Header.ts";
import Footer from "../fibers/Footer.ts";

const GalleryPage: Fabric<{}> = async ({ currentURL }) => {
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
    title.textContent = "GALLERY | 捻れたバベル";
    const link = document.createElement("link");
    link.setAttribute("href", "./style.css");
    link.setAttribute("rel", "stylesheet");

    const header = await Header(currentURL);
    const main = document.createElement("main");
    const h2 = document.createElement("h2");
    h2.textContent = "GALLERY";
    main.appendChild(h2);
    const apikey = config().API_KEY ?? Deno.env.get("API_KEY");
    const h31 = document.createElement("h3");
    h31.textContent = "TAG";
    const req1 = new Request(
        "https://hutinoatariblog.microcms.io/api/v1/tags",
        {
            method: "GET",
            headers: new Headers({
                "content-type": "application/json",
                "X-MICROCMS-API-KEY": apikey,
            }),
        },
    );
    const res1 = await fetch(req1);
    const json1: WorkListResponse = await res1.json();
    const contents1 = json1.contents;
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
    const req2 = new Request(
        "https://hutinoatariblog.microcms.io/api/v1/works?limit=1024",
        {
            method: "GET",
            headers: new Headers({
                "content-type": "application/json",
                "X-MICROCMS-API-KEY": apikey,
            }),
        },
    );
    const res2 = await fetch(req2);
    const json2: WorkListResponse = await res2.json();
    const contents2 = json2.contents;
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
        head: [charsetMeta, viewportMeta, generatorMeta, title, link],
        body: [header, main, footer],
    };
};

export default GalleryPage;
