import {
    basename,
    dirname,
    relative,
} from "https://deno.land/x/std@0.140.0/path/mod.ts";

const fromToURL = (from: string, to: string): string => {
    if (dirname(from) === dirname(to)) return `./${basename(to)}`;
    return relative(from, to);
};

export { fromToURL };
