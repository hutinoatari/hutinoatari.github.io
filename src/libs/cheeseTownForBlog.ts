interface Syntax {
    regex: RegExp;
    generate(...args: string[]): string;
}

const parser: Syntax[] = [
    {
        regex: /^\[section\] (.+)/,
        generate: (_, word) => {
            return `<h3>${word.trim()}</h3>`;
        },
    },
    {
        regex: /^\[list\] (.+)/,
        generate: (_, text) => {
            const items = text.split("|");
            return `<ul>${items
                .map((item) => `<li>${item.trim()}</li>`)
                .join("")}</ul>`;
        },
    },
];

const cheeseTownToHtml = (markup: string): string => {
    const tokens = markup
        .replace(/[<>]/g, (c) => (c === "<" ? "&lt;" : "&gt;"))
        .split("\n")
        .filter((e) => e !== "");
    const html = tokens
        .map((token) => {
            for (const syntax of parser) {
                const match = token.match(syntax.regex);
                if (match !== null) return syntax.generate(...match);
            }
            return `<p>${token.trim()}</p>`;
        })
        .join("");
    return html;
};

export { cheeseTownToHtml };
