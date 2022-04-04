const regex = /^\[section\] (.+)/;

const mdToHtml = (markdown: string): string => {
    const escapedAnglebracketsMarkdown: string = markdown.replace(
        /[<>]/g,
        (c) => (c === "<" ? "&lt;" : "&gt;")
    );
    const lines: string[] = escapedAnglebracketsMarkdown.split("\n");
    const elements: string[] = lines.map((line) => {
        const match = line.match(regex);
        if(match) return `<h3>${match[1]}</h3>`;
        return `<p>${line}</p>`;
    });
    const html = elements.join("");
    return html;
};

export { mdToHtml };
