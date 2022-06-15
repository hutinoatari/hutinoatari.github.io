import { addNode, document, Fabric } from "../loom.ts";
import { getData } from "../libs/microcms.ts";

const GalleryPage: Fabric<{}> = async () => {
    const title = document.createElement("title");
    title.textContent = "GALLERY | 捻れたバベル";

    const h2 = document.createElement("h2");
    h2.textContent = "GALLERY";
    const h31 = document.createElement("h3");
    h31.textContent = "TAG";
    const contents1 = (await getData({
        endpoint: "tags",
    })).contents;
    const tagUl = document.createElement("ul");
    for (const content of contents1) {
        const tagLi = document.createElement("li");
        const tagA = document.createElement("a");
        tagA.setAttribute("href", `./gallery/tag/${content.id}.html`);
        tagA.textContent = content.name;
        addNode(tagLi, tagA);
        addNode(tagUl, tagLi);
    }
    const h32 = document.createElement("h3");
    h32.textContent = "WORK";
    const contents2 = (await getData({
        endpoint: "works",
        options: [["limit", 1024]],
    })).contents;
    const workUl = document.createElement("ul");
    for (const content of contents2) {
        const workLi = document.createElement("li");
        const workA = document.createElement("a");
        workA.setAttribute("href", `./gallery/${content.id}.html`);
        workA.textContent = content.name;
        addNode(workLi, workA);
        const p = document.createElement("p");
        p.textContent = content.description;
        addNode(workUl, [workLi, p]);
    }

    return {
        head: [title],
        body: [h2, h31, tagUl, h32, workUl],
    };
};

export default GalleryPage;
