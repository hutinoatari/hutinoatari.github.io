import { Node } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

export type Fiber = {
    (...args: any[]): Promise<Node>;
};

export type Fabric = {
    (path?: string): Promise<
        { head: Node | Node[]; body: Node | Node[] }
    >;
};
export type Nozzle = {
    (): Promise<string[]>;
};

export type Document = {
    (
        head: Node[],
        body: Node[],
    ): Promise<Node>;
};
