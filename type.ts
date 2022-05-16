export type Fiber = {
    (param?: any): Promise<string>;
};

export type Fabric = {
    (): Promise<{ head: string; body: string }>;
};
