import { Fiber } from "../type.ts";

interface LinkProps {
    to: string;
    name: string;
}

const Link: Fiber = async ({
    to,
    name,
}: LinkProps) => {
    const url = `${to}.html`;
    return `<a href="${url}">${name}</a>`;
};

export default Link;
