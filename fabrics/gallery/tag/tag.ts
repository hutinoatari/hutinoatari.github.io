import { document, Fabric, Nozzle } from "../../../loom.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import {
    TagResponse,
    WorkListResponse,
    WorkResponse,
} from "../../../types/api.ts";
import { cheeseTownToHtml } from "../../../libs/cheeseTown.ts";
import Header from "../../../fibers/Header.ts";
import Footer from "../../../fibers/Footer.ts";

const TagPage: Fabric<{}> = async ({ currentURL, id }) => {
    const apikey = config().API_KEY ?? Deno.env.get("API_KEY");
    const req = new Request(
        `https://hutinoatariblog.microcms.io/api/v1/tags/${id}`,
        {
            method: "GET",
            headers: new Headers({
                "content-type": "application/json",
                "X-MICROCMS-API-KEY": apikey,
            }),
        },
    );
    const res = await fetch(req);
    const tag: TagResponse = await res.json();

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
    title.textContent = `${tag.name} | 捻れたバベル`;
    const link = document.createElement("link");
    link.setAttribute("href", "../../style.css");
    link.setAttribute("rel", "stylesheet");

    const header = await Header(currentURL);
    const main = document.createElement("main");
    const h2 = document.createElement("h2");
    h2.textContent = "GALLERY";
    const h3 = document.createElement("h3");
    h3.textContent = `タグ: ${tag.name}`;
    main.appendChild(h2);
    main.appendChild(h3);
    const req2 = new Request(
        `https://hutinoatariblog.microcms.io/api/v1/works?filters=tag[equals]${id}`,
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
        workA.setAttribute("href", `../${content.id}.html`);
        workA.textContent = content.name;
        workLi.appendChild(workA);
        const p = document.createElement("p");
        p.textContent = content.description;
        workUl.appendChild(workLi);
        workUl.appendChild(p);
    }
    main.appendChild(workUl);
    const footer = await Footer();

    return {
        head: [charsetMeta, viewportMeta, generatorMeta, title, link],
        body: [header, main, footer],
    };
};

export const nozzle: Nozzle = async () => {
    const apikey = config().API_KEY ?? Deno.env.get("API_KEY");
    const req = new Request(
        "https://hutinoatariblog.microcms.io/api/v1/tags",
        {
            method: "GET",
            headers: new Headers({
                "content-type": "application/json",
                "X-MICROCMS-API-KEY": apikey,
            }),
        },
    );
    const res = await fetch(req);
    const json: WorkListResponse = await res.json();
    const contents = json.contents;
    const path = contents.map((e) => e.id);
    return path;
};

export default TagPage;
