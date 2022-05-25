import { Node } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

export type Fiber = {
    (...args: any[]): Promise<Node>;
};

export type Fabric = {
    (): Promise<
        { head: Node | Node[]; body: Node | Node[] }
    >;
};

export type Document = {
    (
        head: Node | Node[],
        body: Node | Node[],
    ): Promise<Node>;
};
