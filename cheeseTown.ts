interface Syntax {
    regex: RegExp;
    convert(...args: string[]): string | Promise<string>;
}

const parser: Syntax[] = [
    {
        regex: /^\[chapter\](.+)/,
        convert: (_, word) => {
            return `<h2>${word.trim()}</h2>`;
        },
    },
    {
        regex: /^\[section\](.+)/,
        convert: (_, word) => {
            return `<h3>${word.trim()}</h3>`;
        },
    },
    {
        regex: /^\[subsection\](.+)/,
        convert: (_, word) => {
            return `<h4>${word.trim()}</h4>`;
        },
    },
    {
        regex: /^\[list\](.+)/,
        convert: (_, text) => {
            const items = text.split("|");
            return `<ul>${
                items.map((item) => `<li>${item.trim()}</li>`).join("")
            }</ul>`;
        },
    },
    {
        regex: /^\[picture\]\{(.+)\}(.+)/,
        convert: (_, url, caption) => {
            return `<figure><img src="${url.trim()}"><figcaption>${caption.trim()}</figcaption></figure>`;
        },
    },
];

const cheeseTownToHtml = async (markup: string): Promise<string> => {
    const lines = markup
        .replace(/[<>]/g, (c) => (c === "<" ? "&lt;" : "&gt;"))
        .split("\n")
        .filter((e) => e.trim() !== "");
    const html = (await Promise.all(lines
        .map(async (line) => {
            for (const syntax of parser) {
                const match = line.match(syntax.regex);
                if (match !== null) return await syntax.convert(...match);
            }
            return `<p>${line.trim()}</p>`;
        })))
        .join("");
    return new Promise((res) => res(html));
};

export { cheeseTownToHtml };
