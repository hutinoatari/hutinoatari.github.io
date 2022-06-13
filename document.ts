import { Document, document } from "./loom.ts";
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
    descriptionMeta.setAttribute(
        "description",
        "淵野アタリのポートフォリオサイトです。手芸やプログラミングの作品を公開しています。",
    );
    const authorMeta = document.createElement("meta");
    authorMeta.setAttribute("author", "淵野アタリ");
    const ogSiteMeta = document.createElement("meta");
    ogSiteMeta.setAttribute("og:site_name", "捻れたバベル");
    const twitterCardMeta = document.createElement("meta");
    twitterCardMeta.setAttribute("twitter:card", "summary");
    const twitterSiteMeta = document.createElement("meta");
    twitterSiteMeta.setAttribute("twitter:site", "@hutinoatari");
    const link = document.createElement("link");
    link.setAttribute("href", relativePath(from, "/style.css"));
    link.setAttribute("rel", "stylesheet");
    [
        charsetMeta,
        viewportMeta,
        generatorMeta,
        descriptionMeta,
        authorMeta,
        ogSiteMeta,
        twitterCardMeta,
        twitterSiteMeta,
        link,
    ].forEach((e) => headPart.appendChild(e));

    head.forEach((e) => headPart.appendChild(e));
    const bodyPart = document.createElement("body");
    const main = document.createElement("main");
    body.forEach((e) => main.appendChild(e));
    const header = await Header(currentPath);
    const footer = await Footer();
    bodyPart.appendChild(header);
    bodyPart.appendChild(main);
    bodyPart.appendChild(footer);
    html.appendChild(headPart);
    html.appendChild(bodyPart);
    return html;
};

export { Page };
