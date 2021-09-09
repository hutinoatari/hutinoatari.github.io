import { FC } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ErrorPage: FC<{}> = () => {
    return (
        <>
            <Head>
                <title>NOT FOUND | 淵野アタリのブログ</title>
                <meta name="og:title" content="NOT FOUND | 淵野アタリのブログ" />
                <meta name="twitter:card" content="summary" />
            </Head>
            <Header />
            <main>
                <p>存在しないページです。</p>
            </main>
            <Footer />
        </>
    );
};

export default ErrorPage;
