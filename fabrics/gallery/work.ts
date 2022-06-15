import { addNode, document, Fabric, Nozzle } from "../../loom.ts";
import { cheeseTownToHtml } from "../../libs/cheeseTown.ts";
import { getData } from "../../libs/microcms.ts";
import Metas from "../../fibers/Metas.ts";

const WorkPage: Fabric<{}> = async ({ id }) => {
    const work = await getData({
        endpoint: "works",
        id,
    });

    const metas = await Metas();
    const title = document.createElement("title");
    title.textContent = `${work.name} | 捻れたバベル`;

    const h2 = document.createElement("h2");
    h2.textContent = work.name;
    const p = document.createElement("p");
    const a = document.createElement("a");
    a.setAttribute("href", `./tag/${work.tag.id}.html`);
    a.textContent = work.tag.name;
    addNode(p, [document.createTextNode("タグ: "), a]);
    const div1 = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", work.image.url);
    addNode(div1, img);
    const div2 = document.createElement("div");
    div2.innerHTML = cheeseTownToHtml(work.caption);

    return {
        head: [...metas, title],
        body: [h2, p, div1, div2],
    };
};

export const nozzle: Nozzle = async () => {
    const contents = (await getData({
        endpoint: "works",
        options: [["limit", 1024]],
    })).contents;
    const path = contents.map((e) => e.id);
    return path;
};

export default WorkPage;
