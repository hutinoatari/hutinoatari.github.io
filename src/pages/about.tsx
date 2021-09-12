import { FC } from "react";
import PageHead from "../components/PageHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExternalLink from "../components/ExternalLink";

const AboutPage: FC<{}> = () => {
    return (
        <>
            <PageHead title="ABOUT" />
            <Header />
            <main>
                <h2>ABOUT</h2>
                <p>靴紐を使った手芸とフロントエンド開発をやってる。</p>
                <table>
                    <tbody>
                        <tr>
                            <th>名前</th>
                            <td>淵野アタリ</td>
                        </tr>
                        <tr>
                            <th>Twitter</th>
                            <td>
                                <ExternalLink
                                    title="@umaiebiten2"
                                    url="https://twitter.com/umaiebiten2"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>GitHub</th>
                            <td>
                                <ExternalLink
                                    title="hutinoatari"
                                    url="https://github.com/hutinoatari"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <Footer />
        </>
    );
};

export default AboutPage;
