import { addNode, document, Fiber } from "../loom.ts";
import InternalLink from "./InternalLink.ts";

const Header: Fiber = async (currentURL: string) => {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "捻れたバベル";
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const from = currentURL.slice(4);
    [
        {
            from,
            to: "/index.html",
            name: "TOP",
        },
        {
            from,
            to: "/profile.html",
            name: "PROFILE",
        },
        {
            from,
            to: "/gallery.html",
            name: "GALLERY",
        },
    ].forEach(async (e) => {
        const li = document.createElement("li");
        const a = await InternalLink(e);
        addNode(li, a);
        addNode(ul, li);
    });
    addNode(nav, ul);
    addNode(header, [h1, nav]);
    return header;
};

export default Header;
