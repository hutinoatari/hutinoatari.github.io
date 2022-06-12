import { document, Fiber } from "../loom.ts";
import { relativePath } from "../utils/util.ts";

interface Props {
    from: string;
    to: string;
    name: string;
}

const InternalLink: Fiber = async ({
    from,
    to,
    name,
}: Props) => {
    if (from === to) {
        const span = document.createElement("span");
        span.textContent = name;
        return span;
    }
    const a = document.createElement("a");
    a.setAttribute("href", relativePath(from, to));
    a.textContent = name;
    return a;
};

export default InternalLink;
