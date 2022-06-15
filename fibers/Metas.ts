import { document, Fibers } from "../loom.ts";
import Meta from "./Meta.ts";

const Metas: Fibers = async (ogpURL?: string) => {
    const charsetMeta = document.createElement("meta");
    charsetMeta.setAttribute("charset", "UTF-8");
    const viewportMeta = await Meta("viewport", "width=device-width");
    const generatorMeta = await Meta(
        "generator",
        "Loom (private Static Site Generator)",
    );
    const descriptionMeta = await Meta(
        "description",
        "淵野アタリのポートフォリオサイトです。手芸やプログラミングの作品を公開しています。",
    );
    const authorMeta = await Meta("author", "淵野アタリ");
    const ogSiteMeta = await Meta("og:site_name", "捻れたバベル");
    const twitterCardMeta = await Meta(
        "twitter:card",
        ogpURL ? "summary_large_image" : "summary",
    );
    const twitterSiteMeta = await Meta("twitter:site", "@hutinoatari");
    const t = [
        charsetMeta,
        viewportMeta,
        generatorMeta,
        descriptionMeta,
        authorMeta,
        ogSiteMeta,
        twitterCardMeta,
        twitterSiteMeta,
    ];
    if (ogpURL) t.push(await Meta("og:image", ogpURL));
    return t;
};

export default Metas;
