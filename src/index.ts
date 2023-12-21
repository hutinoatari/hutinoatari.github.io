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
                                                        "./profile.html",
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
                            name: "p",
                            children:
                                "物事の最小単位は技術だ。自作を通して構造を掌握すれば心の皇帝になれるだろう。真に輝けるものに近付けるかもしれない。",
                        },
                        {
                            name: "h3",
                            children: "靴紐細工とは",
                        },
                        {
                            name: "p",
                            children: "靴紐で生物の姿形を再現する技術。",
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
