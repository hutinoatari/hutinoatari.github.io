import { document, Fabric } from "../loom.ts";
import { getData } from "../libs/microcms.ts";

const TopPage: Fabric<{}> = async () => {
    const title = document.createElement("title");
    title.textContent = "捻れたバベル";

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

    return {
        head: [title],
        body: [p, workUl],
    };
};

export default TopPage;
