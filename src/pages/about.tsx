import { FC } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExternalLink from "../components/ExternalLink";

const AboutPage: FC<{}> = () => {
    return (
        <>
            <Head>
                <title>ABOUT | 淵野アタリのブログ</title>
                <meta name="og:title" content="ABOUT | 淵野アタリのブログ" />
                <meta name="twitter:card" content="summary" />
            </Head>
            <Header />
            <main>
                <h2>ABOUT</h2>
                <p>淵野アタリです。</p>
            </main>
            <Footer />
        </>
    );
};

export default AboutPage;
