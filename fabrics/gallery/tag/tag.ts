import { document, Fabric, Nozzle } from "../../../loom.ts";
import Header from "../../../fibers/Header.ts";
import Footer from "../../../fibers/Footer.ts";
import { getData } from "../../../libs/microcms.ts";
import Head from "../../../fibers/Head.ts";

const TagPage: Fabric<{}> = async ({ currentURL, id }) => {
    const tag = (await getData({
        endpoint: "tags",
        id,
    }));

    const from = currentURL.slice(4);
    const head = await Head({ titleName: `${tag.name} | 捻れたバベル`, from });

    const header = await Header(currentURL);
    const main = document.createElement("main");
    const h2 = document.createElement("h2");
    h2.textContent = "GALLERY";
    const h3 = document.createElement("h3");
    h3.textContent = `タグ: ${tag.name}`;
    main.appendChild(h2);
    main.appendChild(h3);
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
        workLi.appendChild(workA);
        const p = document.createElement("p");
        p.textContent = content.description;
        workUl.appendChild(workLi);
        workUl.appendChild(p);
    }
    main.appendChild(workUl);
    const footer = await Footer();

    return {
        head: Array.from(head.childNodes),
        body: [header, main, footer],
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
