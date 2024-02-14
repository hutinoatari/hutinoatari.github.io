import { Fabric } from "../loom.ts";

import works from "../data/works.json" assert { type: "json" };

const topPage: Fabric = {
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
                                                        "./index.html",
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
                                                        "./gallery.html",
                                                    ]],
                                                    children: "作品",
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
                                                        "./link.html",
                                                    ]],
                                                    children: "友達",
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
                            children: "概要",
                        },
                        {
                            name: "h3",
                            children: "人相",
                        },
                        {
                            name: "figure",
                            children: [
                                {
                                    name: "img",
                                    options: [["src", "./img/face.png"]],
                                    children: "",
                                },
                                {
                                    name: "figcaption",
                                    children: "アイコン"
                                }
                            ],
                        },
                        {
                            name: "h3",
                            children: "直近の作品",
                        },
                        {
                            name: "ul",
                            children: works.toReversed().slice(0, 3).map(
                                (work) => ({
                                    name: "li",
                                    children: [{
                                        name: "a",
                                        options: [[
                                            "href",
                                            `./gallery/${work.id}.html`,
                                        ]],
                                        children: work.name,
                                    }],
                                }),
                            ),
                        },
                        {
                            name: "h3",
                            children: "趣味"
                        },
                        {
                            name: "ul",
                            children: [
                                {
                                    name: "li",
                                    children: "うどん",
                                },
                                {
                                    name: "ul",
                                    children: [
                                        {
                                            name: "li",
                                            children: "たまに小麦粉を捏ねる。",
                                        },
                                    ],
                                },
                                {
                                    name: "li",
                                    children: "読書",
                                },
                                {
                                    name: "ul",
                                    children: [
                                        {
                                            name: "li",
                                            children: "好きな作家は上遠野浩平。",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            name: "h3",
                            children: "外部"
                        },
                        {
                            name: "ul",
                            children: [
                                {
                                    name: "li",
                                    children: [
                                        {
                                            name: "a",
                                            options: [["target", "_blank"], [
                                                "href",
                                                "https://twitter.com/hutinoatari",
                                            ]],
                                            children: "Twitter",
                                        },
                                    ],
                                },
                                {
                                    name: "li",
                                    children: [
                                        {
                                            name: "a",
                                            options: [["target", "_blank"], [
                                                "href",
                                                "https://github.com/hutinoatari",
                                            ]],
                                            children: "GitHub",
                                        },
                                    ],
                                },
                            ],
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
};

export default topPage;
