import { document, Fiber } from "../loom.ts";

const Footer: Fiber = async () => {
    const footer = document.createElement("footer");
    const p = document.createElement("p");
    const small = document.createElement("small");
    small.innerHTML = "&copy;2016 淵野アタリ";
    p.appendChild(small);
    footer.appendChild(p);
    return footer;
};

export default Footer;
