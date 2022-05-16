import { Fabric } from "../type.ts";
import Link from "../fibers/Link.ts";

const TopPage: Fabric = async () => {
    return {
        head:
            `<title>捻れたバベル</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="./style.css">`,
        body: `<header><h1>捻れたバベル</h1><nav>${await Link({
            to: "index",
            name: "TOP",
        })}・${await Link({
            to: "about",
            name: "ABOUT",
        })}・${await Link({
            to: "gallery",
            name: "GALLERY",
        })}</nav></header><main><section><h2>WORKS</h2><p>準備中......</p></section><section><h2>PROFILE</h2><dl><dt>名前</dt><dd>淵野アタリ</dd><dt>サークル</dt><dd>捻れたバベル</dd><dt>Twitter</dt><dd><a href="https://twitter.com/hutinoatari" target="_blank">@hutinoatari</a></dd><dt>GitHub</dt><dd><a href="https://github.com/hutinoatari" target="_blank">hutinoatari</a></dd><dt>Site</dt><dd><a href="https://www.hutinoatari.dev/" target="_blank">hutinoatari.dev</a></dd></dl></section></main><footer><p><small>&copy;2021 淵野アタリ</small></p></footer>`,
    };
};

export default TopPage;
