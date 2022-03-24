const regex = /^\[(.+)\] (.+)/;

const mdToHtml = (markdown: string): string => {
    const escapedAnglebracketsMarkdown: string = markdown.replace(
        /[<>]/g,
        (c) => (c === "<" ? "&lt;" : "&gt;")
    );
    const lines: string[] = escapedAnglebracketsMarkdown.split("\n");
    const linesWithoutBlankline: string[] = lines
        .map((line) => line.trim())
        .filter((line) => line !== "");
    const elements: string[] = linesWithoutBlankline.map((line) => {
        const match = line.match(regex);
        if (match === null) return `<p>${line}</p>`;
        const elementName = match[1];
        const text = match[2];
        switch (elementName) {
            case "section":
                return `<h3>${text.trim()}</h3>`;
            case "list":
                const items: string[] = text.split("|");
                return `<ul>${items.map(
                    (item) => `<li>${item.trim()}</li>`
                )}</ul>`;
            default:
                return `<p>${line}</p>`;
        }
    });
    const html = elements.join("");
    return html;
};

export { mdToHtml };
