import { parse, relative } from "https://deno.land/std@0.139.0/path/mod.ts";

const relativePath = (from: string, to: string): string => {
    const fromP = parse(from);
    const toP = parse(to);
    const p = relative(fromP.dir, toP.dir);
    return `${p !== "" ? p : "."}/${toP.base}`;
};

export { relativePath };
