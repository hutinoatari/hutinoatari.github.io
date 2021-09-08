import { FC } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExternalLink from "../components/ExternalLink";

const LinkPage: FC<{}> = () => {
    return (
        <>
            <Head>
                <title>LINK | 淵野アタリのブログ</title>
                <meta name="og:title" content="LINK | 淵野アタリのブログ" />
                <meta name="twitter:card" content="summary" />
            </Head>
            <Header />
            <main>
                <h2>LINK</h2>
                <ul>
                    <li>
                        <ExternalLink title="" url="" />
                    </li>
                </ul>
            </main>
            <Footer />
        </>
    );
};

export default LinkPage;
