import { FC } from "react";
import PageHead from "../components/PageHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LinkListItem from "../components/LinkListItem";

const LinkPage: FC<{}> = () => {
    return (
        <>
            <PageHead title="LINK" />
            <Header />
            <main>
                <h2>LINK</h2>
                <ul>
                    <LinkListItem
                        title="こちらに用意がございます。"
                        url="https://characordbracelets.hateblo.jp/"
                        author="ネツゾーさん"
                    />
                    <LinkListItem
                        title="わたとか"
                        url="https://m393.web.fc2.com/"
                        author="腑熔さん"
                    />
                    <LinkListItem
                        title="つまみネット"
                        url="https://trpfrog.net/"
                        author="つまみ"
                    />
                    <LinkListItem
                        title="あずきノート"
                        url="https://uxhpu.net/"
                        author="あずき"
                    />
                    <LinkListItem
                        title="B.B.B. World"
                        url="https://baki-0.github.io/"
                        author="B"
                    />
                    <LinkListItem
                        title="ウサギ小屋"
                        url="https://www.kyu099.net/"
                        author="きゅ〜"
                    />
                    <LinkListItem
                        title="ねぎー日記"
                        url="https://negiissei.com/"
                        author="ねぎ一世"
                    />
                    <LinkListItem
                        title="Monbrand Software"
                        url="https://www.mbsoftware.tokyo/"
                        author="おひげ先輩"
                    />
                    <LinkListItem
                        title="ごっち"
                        url="https://gotti.dev/"
                        author="gottiくん"
                    />
                    <LinkListItem
                        title="りんりん"
                        url="https://lnln.dev/"
                        author="りんりんくん"
                    />
                    <LinkListItem
                        title="アイスの棒"
                        url="https://azukibar.dev/"
                        author="あずきバーくん"
                    />
                </ul>
            </main>
            <Footer />
        </>
    );
};

export default LinkPage;
