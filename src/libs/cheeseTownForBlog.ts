interface Syntax {
    regex: RegExp;
    convert(...args: string[]): string;
}

const parser: Syntax[] = [
    {
        regex: /^\[section\](.+)/,
        convert: (_, word) => {
            return `<h3>${word.trim()}</h3>`;
        },
    },
    {
        regex: /^\[list\](.+)/,
        convert: (_, text) => {
            const items = text.split("|");
            return `<ul>${items
                .map((item) => `<li>${item.trim()}</li>`)
                .join("")}</ul>`;
        },
    },
];

const cheeseTownToHtml = (markup: string): string => {
    const lines = markup
        .replace(/[<>]/g, (c) => (c === "<" ? "&lt;" : "&gt;"))
        .split("\n")
        .filter((e) => e !== "");
    const html = lines
        .map((line) => {
            for (const syntax of parser) {
                const match = line.match(syntax.regex);
                if (match !== null) return syntax.convert(...match);
            }
            return `<p>${line.trim()}</p>`;
        })
        .join("");
    return html;
};

export { cheeseTownToHtml };
