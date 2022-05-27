import { FabricG, Nozzle } from "../../type.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { WorkListResponse } from "../../types/api.ts";
import Header from "../../fibers/Header.ts";
import Footer from "../../fibers/Footer.ts";

const WorkPage: FabricG = async (path) => {
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
    title.textContent = "捻れたバベル";

    const header = await Header("dist/gallery/work.html");
    const main = document.createElement("main");
    const p = document.createElement("p");
    p.textContent = `${path}のページ`;
    main.appendChild(p);
    const footer = await Footer();

    return {
        head: [charsetMeta, viewportMeta, generatorMeta, title],
        body: [header, main, footer],
    };
};

export const nozzle: Nozzle = async () => {
    const apikey = config().API_KEY ?? Deno.env.get("API_KEY");
    const req = new Request(
        "https://hutinoatariblog.microcms.io/api/v1/works?limit=1024",
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

export default WorkPage;
