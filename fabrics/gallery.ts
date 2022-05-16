import { Fabric } from "../type.ts";
import Link from "../fibers/Link.ts";

const GalleryPage: Fabric = async () => {
    return {
        head:
            `<title>ABOUT | 捻れたバベル</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="./style.css">`,
        body: `<header><h1>捻れたバベル</h1><nav>${await Link({
            to: "index",
            name: "TOP",
        })}・${await Link({
            to: "about",
            name: "ABOUT",
        })}・${await Link({
            to: "gallery",
            name: "GALLERY",
        })}</nav></header><main><h2>GALLERY</h2><p>準備中......</p></main><footer><p><small>&copy;2021 淵野アタリ</small></p></footer>`,
    };
};

export default GalleryPage;
