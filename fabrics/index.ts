import { document, Fabric } from "../loom.ts";
import Header from "../fibers/Header.ts";
import Footer from "../fibers/Footer.ts";
import { getData } from "../libs/microcms.ts";
import Head from "../fibers/Head.ts";

const TopPage: Fabric<{}> = async ({ currentURL }) => {
    const from = currentURL.slice(4);
    const head = await Head({ titleName: "捻れたバベル", from });

    const header = await Header(currentURL);
    const main = document.createElement("main");
    const p = document.createElement("p");
    p.textContent = "準備中......";
    const contents = (await getData({
        endpoint: "works",
        options: [["limit", 3]],
    })).contents;
    const workUl = document.createElement("ul");
    for (const content of contents) {
        const workLi = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", `./gallery/${content.id}.html`);
        a.textContent = content.name;
        workLi.appendChild(a);
        workUl.appendChild(workLi);
    }
    main.appendChild(p);
    main.appendChild(workUl);
    const footer = await Footer();

    return {
        head: Array.from(head.childNodes),
        body: [header, main, footer],
    };
};

export default TopPage;
