import { Fabric } from "../type.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { WorkListResponse } from "../types/api.ts";

const TopPage: Fabric = async () => {
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

    const p = document.createElement("p");
    p.textContent = "準備中......";

    const apikey = config().API_KEY ?? Deno.env.get("API_KEY");
    const req = new Request(
        "https://hutinoatariblog.microcms.io/api/v1/works?limit=3",
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
    const ul = document.createElement("ul");
    for (const content of contents) {
        const li = document.createElement("li");
        li.textContent = content.name;
        ul.appendChild(li);
    }

    return {
        head: [charsetMeta, viewportMeta, generatorMeta, title],
        body: [p, ul],
    };
};

export default TopPage;
