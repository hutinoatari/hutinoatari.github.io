import { addNode, document, Fabric, Nozzle } from "../../../loom.ts";
import { getData } from "../../../libs/microcms.ts";
import Metas from "../../../fibers/Metas.ts";

const TagPage: Fabric<{}> = async ({ id }) => {
    const tag = (await getData({
        endpoint: "tags",
        id,
    }));

    const metas = await Metas();
    const title = document.createElement("title");
    title.textContent = `${tag.name} | 捻れたバベル`;

    const h2 = document.createElement("h2");
    h2.textContent = "GALLERY";
    const h3 = document.createElement("h3");
    h3.textContent = `タグ: ${tag.name}`;
    const contents2 = (await getData({
        endpoint: "works",
        options: [["filters", `tag[equals]${id}`]],
    })).contents;
    const workUl = document.createElement("ul");
    for (const content of contents2) {
        const workLi = document.createElement("li");
        const workA = document.createElement("a");
        workA.setAttribute("href", `../${content.id}.html`);
        workA.textContent = content.name;
        addNode(workLi, workA);
        const p = document.createElement("p");
        p.textContent = content.description;
        addNode(workUl, [workLi, p]);
    }

    return {
        head: [...metas, title],
        body: [h2, h3, workUl],
    };
};

export const nozzle: Nozzle = async () => {
    const contents = (await getData({
        endpoint: "tags",
    })).contents;
    const path = contents.map((e) => e.id);
    return path;
};

export default TagPage;
