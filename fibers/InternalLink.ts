import { document, Fiber } from "../loom.ts";
import { parse, relative } from "https://deno.land/std@0.139.0/path/mod.ts";

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
    const fromP = parse(from);
    const toP = parse(to);
    const p = relative(fromP.dir, toP.dir);
    const a = document.createElement("a");
    a.setAttribute("href", `${p !== "" ? p : "."}/${toP.base}`);
    a.textContent = name;
    return a;
};

export default InternalLink;
