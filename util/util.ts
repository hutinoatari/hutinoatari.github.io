import { relative } from "https://deno.land/x/std@0.140.0/path/mod.ts";

const fromToURL = (from: string, to: string): string => {
    return relative(from, to).slice(1);
};

export { fromToURL };
