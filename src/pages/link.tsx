import { FC } from "react";
import PageHead from "../components/PageHead";
import ExternalLink from "../components/ExternalLink";

interface LinkData {
    title: string;
    url: string;
    author: string;
}
interface Props {
    links: LinkData[];
}

const LinkPage: FC<Props> = ({ links }) => {
    return (
        <>
            <PageHead title="LINK" />

            <h2>リンク</h2>
            <ul>
                {links.map((link: LinkData, i: number) => (
                    <li key={`link-${i}`}>
                        <ExternalLink title={link.title} url={link.url} />(
                        {link.author})
                    </li>
                ))}
            </ul>
        </>
    );
};

export const getStaticProps = async () => {
    const data: LinkData[] = [
        {
            title: "こちらに用意がございます。",
            url: "https://characordbracelets.hateblo.jp/",
            author: "ネツゾーさん",
        },
        {
            title: "わたとか",
            url: "https://m393.web.fc2.com/",
            author: "腑熔さん",
        },
        {
            title: "つまみネット",
            url: "https://trpfrog.net/",
            author: "つまみ",
        },
        {
            title: "あずきノート",
            url: "https://uxhpu.net/",
            author: "あずき",
        },
        {
            title: "B.B.B. World",
            url: "https://baki-0.github.io/",
            author: "B",
        },
        {
            title: "ウサギ小屋",
            url: "https://www.kyu099.net/",
            author: "きゅ〜",
        },
        {
            title: "Lunatic電通生もっちゃんの部屋",
            url: "https://mocchan.dev/",
            author: "もっちゃん",
        },
        {
            title: "ねぎー日記",
            url: "https://negiissei.com/",
            author: "ねぎ一世",
        },
        {
            title: "Monbrand Software",
            url: "https://www.mbsoftware.tokyo/",
            author: "おひげ先輩",
        },
        {
            title: "ごっち",
            url: "https://gotti.dev/",
            author: "gottiくん",
        },
        {
            title: "りんりん",
            url: "https://lnln.dev/",
            author: "りんりんくん",
        },
        {
            title: "アイスの棒",
            url: "https://azukibar.dev/",
            author: "あずきバーくん",
        },
        {
            title: "k1h Portfolio",
            url: "https://k1h.dev/",
            author: "ぼいどくん",
        },
    ];
    return {
        props: {
            links: data,
        },
    };
};

export default LinkPage;
