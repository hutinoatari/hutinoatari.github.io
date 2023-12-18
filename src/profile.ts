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
                        {
                            name: "p",
                            children:
                                "電気通信大学工学研究部2024年度名誉副部長",
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
                        {
                            name: "h3",
                            children: "好きな作品",
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
                                                "https://dengekibunko.jp/special/boogiepop/",
                                            ]],
                                            children: "ブギーポップシリーズ",
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
                                                "https://www.cs.furyu.jp/caligula2/",
                                            ]],
                                            children: "カリギュラ2",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            name: "h3",
                            children: "競馬観戦",
                        },
                        {
                            name: "figure",
                            children: [
                                {
                                    name: "img",
                                    options: [[
                                        "src",
                                        "./img/sagaraAmateurHorseRace.jpg",
                                    ]],
                                    children: "",
                                },
                                {
                                    name: "figcaption",
                                    children: "さがら草競馬大会",
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
