import { Node } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

export type Fiber = {
    (...args: any[]): Promise<Node>;
};
export type Fibers = {
    (...args: any[]): Promise<Node[]>;
};

type FabricProps<T> = {
    id?: string;
} & T;
type PageDOM = { head: Node[]; body: Node[] };

export type Fabric<T> = {
    (props: FabricProps<T>): Promise<PageDOM>;
};
export type Nozzle = {
    (): Promise<string[]>;
};

export type Document = {
    (doms: PageDOM, currentPath: string): Promise<Node>;
};

const document = new DOMParser().parseFromString("", "text/html");

const addNode = (parent: Node, child: Node | Node[]): Node => {
    if (!Array.isArray(child)) {
        parent.appendChild(child);
    } else {
        child.forEach((e) => parent.appendChild(e));
    }
    return parent;
};

export { addNode, document };
