import { addNode, Document, document } from "./loom.ts";
import Header from "./fibers/Header.ts";
import Footer from "./fibers/Footer.ts";
import { relativePath } from "./utils/util.ts";

const Page: Document = async ({ head, body }, currentPath) => {
    const from = currentPath.slice(4);
    const html = document.createElement("html");
    html.setAttribute("lang", "ja");
    const headPart = document.createElement("head");

    const link = document.createElement("link");
    link.setAttribute("href", relativePath(from, "/style.css"));
    link.setAttribute("rel", "stylesheet");
    addNode(headPart, head);
    addNode(headPart, link);

    const bodyPart = document.createElement("body");
    const main = document.createElement("main");
    addNode(main, body);
    const header = await Header(currentPath);
    const footer = await Footer();
    addNode(bodyPart, [header, main, footer]);
    addNode(html, [headPart, bodyPart]);
    return html;
};

export { Page };
