import { Fabric } from "../type.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { WorkListResponse, WorkResponse } from "../types/api.ts";

const TopPage: Fabric = async () => {
    const document = new DOMParser().parseFromString("", "text/html");
    const title = document.createElement("title");
    title.appendChild(document.createTextNode("捻れたバベル"));
    const p = document.createElement("p");
    p.appendChild(document.createTextNode("準備中......"));

    const apikey = config().API_KEY;
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
    const json = await res.json();
    const contents: WorkResponse[] = json.contents;
    const ul = document.createElement("ul");
    for (const content of contents) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(content.name));
        ul.appendChild(li);
    }

    return {
        head: title,
        body: [p, ul],
    };
};

export default TopPage;
