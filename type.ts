export type Fiber<T> = {
    (param: T): Promise<string>;
};

export type Fabric = {
    (): Promise<{ head: string; body: string }>;
};
