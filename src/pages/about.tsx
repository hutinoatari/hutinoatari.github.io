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
                <p>淵野アタリです。</p>
            </main>
            <Footer />
        </>
    );
};

export default AboutPage;
