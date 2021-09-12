import { FC } from "react";
import PageHead from "../components/PageHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExternalLink from "../components/ExternalLink";

const LinkPage: FC<{}> = () => {
    return (
        <>
            <PageHead title="LINK" />
            <Header />
            <main>
                <h2>LINK</h2>
                <ul>
                    <li>
                        <ExternalLink
                            title="こちらに用意がございます。"
                            url="https://characordbracelets.hateblo.jp/"
                        />
                    </li>
                    <li>
                        <ExternalLink
                            title="わたとか"
                            url="https://m393.web.fc2.com/"
                        />
                    </li>
                    <li>
                        <ExternalLink
                            title="つまみネット"
                            url="https://trpfrog.net/"
                        />
                    </li>
                    <li>
                        <ExternalLink
                            title="あずきノート"
                            url="https://uxhpu.net/"
                        />
                    </li>
                    <li>
                        <ExternalLink
                            title="B.B.B. World"
                            url="https://baki-0.github.io/"
                        />
                    </li>
                    <li>
                        <ExternalLink
                            title="ねぎー日記"
                            url="https://negiissei.com/"
                        />
                    </li>
                    <li>
                        <ExternalLink
                            title="Monbrand Software"
                            url="https://www.mbsoftware.tokyo/"
                        />
                    </li>
                    <li>
                        <ExternalLink title="ごっち" url="https://gotti.dev/" />
                    </li>
                    <li>
                        <ExternalLink
                            title="りんりん"
                            url="https://lnln.dev/"
                        />
                    </li>
                    <li>
                        <ExternalLink
                            title="アイスの棒"
                            url="https://azukibar.dev/"
                        />
                    </li>
                </ul>
            </main>
            <Footer />
        </>
    );
};

export default LinkPage;
