import { document, Fibers } from "../loom.ts";

const Metas: Fibers = async () => {
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
    return [
        charsetMeta,
        viewportMeta,
        generatorMeta,
        descriptionMeta,
        authorMeta,
        ogSiteMeta,
        twitterCardMeta,
        twitterSiteMeta,
    ];
};

export default Metas;
