import { addNode, Document, document } from "./loom.ts";
import Header from "./fibers/Header.ts";
import Footer from "./fibers/Footer.ts";
import { relativePath } from "./utils/util.ts";

const Page: Document = async ({ head, body }, currentPath) => {
    const from = currentPath.slice(4);
    const html = document.createElement("html");
    html.setAttribute("lang", "ja");
    const headPart = document.createElement("head");

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
    const descriptionMeta = document.createElement("meta");
    descriptionMeta.setAttribute("name", "description");
    descriptionMeta.setAttribute(
        "content",
        "淵野アタリのポートフォリオサイトです。手芸やプログラミングの作品を公開しています。",
    );
    const authorMeta = document.createElement("meta");
    authorMeta.setAttribute("name", "author");
    authorMeta.setAttribute("content", "淵野アタリ");
    const ogSiteMeta = document.createElement("meta");
    ogSiteMeta.setAttribute("name", "og:site_name");
    ogSiteMeta.setAttribute("content", "捻れたバベル");
    const twitterCardMeta = document.createElement("meta");
    twitterCardMeta.setAttribute("name", "twitter:card");
    twitterCardMeta.setAttribute("content", "summary");
    const twitterSiteMeta = document.createElement("meta");
    twitterSiteMeta.setAttribute("name", "twitter:site");
    twitterSiteMeta.setAttribute("content", "@hutinoatari");
    const link = document.createElement("link");
    link.setAttribute("href", relativePath(from, "/style.css"));
    link.setAttribute("rel", "stylesheet");
    addNode(headPart, [
        charsetMeta,
        viewportMeta,
        generatorMeta,
        descriptionMeta,
        authorMeta,
        ogSiteMeta,
        twitterCardMeta,
        twitterSiteMeta,
        link,
    ]);
    addNode(headPart, head);

    const bodyPart = document.createElement("body");
    const main = document.createElement("main");
    addNode(main, body);
    const header = await Header(currentPath);
    const footer = await Footer();
    addNode(bodyPart, header);
    addNode(bodyPart, main);
    addNode(bodyPart, footer);
    addNode(html, [headPart, bodyPart]);
    return html;
};

export { Page };
