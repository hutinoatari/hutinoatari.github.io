import { Fabric } from "../../loom.ts";
import { cheeseTownToHtml } from "../../cheeseTown.ts";

import works from "../../data/works.json" assert { type: "json" };

const workPage: (id) => Fabric = (id) => {
    const work = works.filter((e) => e.id === id)[0];
    const description = Deno.readTextFileSync(
        (new URL(`../../work/${id}.cheesetown`, import.meta.url)).pathname,
    );
    return ({
        name: "html",
        options: [["lang", "ja"]],
        children: [
            {
                name: "body",
                children: [
                    {
                        name: "header",
                        children: [
                            {
                                name: "h1",
                                children: "淵野アタリ",
                            },
                            {
                                name: "nav",
                                children: [
                                    {
                                        name: "ul",
                                        children: [
                                            {
                                                name: "li",
                                                children: [
                                                    {
                                                        name: "a",
                                                        options: [[
                                                            "href",
                                                            "../index.html",
                                                        ]],
                                                        children: "概要",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "li",
                                                children: [
                                                    {
                                                        name: "a",
                                                        options: [[
                                                            "href",
                                                            "../profile.html",
                                                        ]],
                                                        children: "人相",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "li",
                                                children: [
                                                    {
                                                        name: "a",
                                                        options: [[
                                                            "href",
                                                            "../gallery.html",
                                                        ]],
                                                        children: "作品",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "main",
                        children: [
                            {
                                name: "h2",
                                children: work.name,
                            },
                            {
                                name: "div",
                                children: cheeseTownToHtml(description),
                            },
                        ],
                    },
                    {
                        name: "footer",
                        children: [
                            {
                                name: "p",
                                children: [
                                    {
                                        name: "small",
                                        children: "&copy;2016 淵野アタリ",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    });
};

export const nozzle = () => {
    const ids = works.map((work) => work.id);
    return ids;
};

export default workPage;
