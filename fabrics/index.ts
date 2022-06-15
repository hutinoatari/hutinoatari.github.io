import { addNode, document, Fabric } from "../loom.ts";
import { getData } from "../libs/microcms.ts";

const TopPage: Fabric<{}> = async () => {
    const title = document.createElement("title");
    title.textContent = "捻れたバベル";

    const aboutH2 = document.createElement("h2");
    aboutH2.textContent = "ABOUT";
    const aboutP = document.createElement("p");
    aboutP.textContent = "準備中......";
    const contents = (await getData({
        endpoint: "works",
        options: [["limit", 3]],
    })).contents;
    const workH2 = document.createElement("h2");
    workH2.textContent = "WORK";
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
        head: [title],
        body: [aboutH2, aboutP, workH2, workUl],
    };
};

export default TopPage;
