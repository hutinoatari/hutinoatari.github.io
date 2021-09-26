import { FC } from "react";
import PageHead from "../components/PageHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LinkItem from "../components/LinkItem";

const LinkPage: FC<{}> = () => {
    return (
        <>
            <PageHead title="LINK" />
            <Header />
            <main>
                <h2>LINK</h2>
                <LinkItem
                    title="こちらに用意がございます。"
                    url="https://characordbracelets.hateblo.jp/"
                    author="ネツゾーさん"
                />
                <LinkItem
                    title="わたとか"
                    url="https://m393.web.fc2.com/"
                    author="腑熔さん"
                />
                <LinkItem
                    title="つまみネット"
                    url="https://trpfrog.net/"
                    author="つまみ"
                />
                <LinkItem
                    title="あずきノート"
                    url="https://uxhpu.net/"
                    author="あずき"
                />
                <LinkItem
                    title="B.B.B. World"
                    url="https://baki-0.github.io/"
                    author="B"
                />
                <LinkItem
                    title="ウサギ小屋"
                    url="https://www.kyu099.net/"
                    author="きゅ〜"
                />
                <LinkItem
                    title="ねぎー日記"
                    url="https://negiissei.com/"
                    author="ねぎ一世"
                />
                <LinkItem
                    title="Monbrand Software"
                    url="https://www.mbsoftware.tokyo/"
                    author="おひげ先輩"
                />
                <LinkItem
                    title="ごっち"
                    url="https://gotti.dev/"
                    author="gottiくん"
                />
                <LinkItem
                    title="りんりん"
                    url="https://lnln.dev/"
                    author="りんりんくん"
                />
                <LinkItem
                    title="アイスの棒"
                    url="https://azukibar.dev/"
                    author="あずきバーくん"
                />
            </main>
            <Footer />
        </>
    );
};

export default LinkPage;
