import { addNode, document, Fabric } from "../loom.ts";
import { getData } from "../libs/microcms.ts";
import Metas from "../fibers/Metas.ts";

const TopPage: Fabric<{}> = async () => {
    const metas = await Metas();
    const title = document.createElement("title");
    title.textContent = "トップページ";

    const aboutH2 = document.createElement("h2");
    aboutH2.textContent = "概要";
    const aboutP = document.createElement("p");
    aboutP.textContent = "淵野アタリの手芸サークル。靴紐手芸やウェブアプリを作っている。";
    const contents = (await getData({
        endpoint: "works",
        options: [["limit", 3]],
    })).contents;
    const workH2 = document.createElement("h2");
    workH2.textContent = "作品";
    const workUl = document.createElement("ul");
    for (const content of contents) {
        const workLi = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", `./gallery/${content.id}.html`);
        a.textContent = content.name;
        addNode(workLi, a);
        addNode(workUl, workLi);
    }

    return {
        head: [...metas, title],
        body: [aboutH2, aboutP, workH2, workUl],
    };
};

export default TopPage;
