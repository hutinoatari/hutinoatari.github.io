import { Node } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

export type Fiber = {
    (...args: any[]): Promise<Node>;
};

type FabricProps<T> = {
    currentURL: string;
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
    (doms: PageDOM): Promise<Node>;
};

const document = new DOMParser().parseFromString("", "text/html");

export { document };
