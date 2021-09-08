import { FC } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LinkItem from "../components/LinkItem";

const LinkPage: FC<{}> = () => {
    return (
        <>
            <Head>
                <title>リンク | 淵野アタリのブログ</title>
                <meta name="og:title" content="リンク | 淵野アタリのブログ" />
                <meta name="twitter:card" content="summary" />
            </Head>
            <Header />
            <main>
                <ul>
                    <LinkItem pageTitle="" url="" />
                </ul>
            </main>
            <Footer />
        </>
    );
};

export default LinkPage;
