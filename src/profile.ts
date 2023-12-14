import { Fabric } from "../loom.ts";

const profilePage: Fabric = {
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
                            children: "人相",
                        },
                        {
                            name: "figure",
                            children: [
                                {
                                    name: "img",
                                    options: [["src", "./img/face.jpg"]],
                                    children: "",
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

export default profilePage;
