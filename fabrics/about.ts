import { document, Fabric } from "../loom.ts";
import Header from "../fibers/Header.ts";
import Footer from "../fibers/Footer.ts";
import Head from "../fibers/Head.ts";

const AboutPage: Fabric<{}> = async ({ currentURL }) => {
    const from = currentURL.slice(4);
    const head = await Head({ titleName: "ABOUT | 捻れたバベル", from });

    const header = await Header(currentURL);
    const main = document.createElement("main");
    const h2 = document.createElement("h2");
    h2.textContent = "ABOUT";
    const p = document.createElement("p");
    p.textContent = "準備中......";
    main.appendChild(p);
    const footer = await Footer();

    return {
        head: Array.from(head.childNodes),
        body: [header, main, footer],
    };
};

export default AboutPage;
