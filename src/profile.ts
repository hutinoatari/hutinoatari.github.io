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
                                        "./img/urawakeiba.jpg",
                                    ]],
                                    children: "",
                                },
                                {
                                    name: "figcaption",
                                    children: "浦和競馬 第32回埼玉新聞栄冠賞",
                                },
                            ],
                        },
                        {
                            name: "p",
                            children:
                                "東京、園田、浦和、大井、川崎、船橋、中山、京都、金沢、笠松、名古屋、서울(ソウル)、福島",
                        },
                        {
                            name: "h3",
                            children: "二郎巡り",
                        },
                        {
                            name: "figure",
                            children: [
                                {
                                    name: "img",
                                    options: [[
                                        "src",
                                        "./img/aizujiro.jpg",
                                    ]],
                                    children: "",
                                },
                                {
                                    name: "figcaption",
                                    children: "ラーメン二郎 会津若松駅前店",
                                },
                            ],
                        },
                        {
                            name: "p",
                            children:
                                "府中、仙川、小岩、小滝橋、歌舞伎町、立川、新潟、三田、新代田、川崎、生田、藤沢、会津、京都",
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
