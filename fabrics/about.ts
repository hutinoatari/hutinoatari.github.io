import { document, Fabric } from "../loom.ts";

const AboutPage: Fabric<{}> = async () => {
    const title = document.createElement("title");
    title.textContent = "ABOUT | 捻れたバベル";

    const h2 = document.createElement("h2");
    h2.textContent = "ABOUT";
    const p = document.createElement("p");
    p.textContent = "準備中......";

    return {
        head: [title],
        body: [h2, p],
    };
};

export default AboutPage;
