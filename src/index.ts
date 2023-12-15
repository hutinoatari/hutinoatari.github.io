import { Fabric } from "../loom.ts";

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
                                "自作することでものごとの仕組みが分かるはずだ。",
                        },
                        {
                            name: "h3",
                            children: "靴紐細工とは",
                        },
                        {
                            name: "p",
                            children: "靴紐で動物の姿形を再現する技術。",
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
