import { document, Fiber } from "../loom.ts";

const Meta: Fiber = async (name: string, content: string) => {
    const meta = document.createElement("meta");
    meta.setAttribute("name", name);
    meta.setAttribute("content", content);
    return meta;
};

export default Meta;
