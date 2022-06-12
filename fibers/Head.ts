import { document, Fiber } from "../loom.ts";
import { relativePath } from "../utils/util.ts";

const Head: Fiber = async ({ titleName, from }) => {
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
    title.textContent = titleName;
    const link = document.createElement("link");
    link.setAttribute("href", relativePath(from, "/style.css"));
    link.setAttribute("rel", "stylesheet");

    const span = document.createElement("span");
    [charsetMeta, viewportMeta, generatorMeta, title, link].forEach((e) =>
        span.appendChild(e)
    );
    return span;
};

export default Head;
