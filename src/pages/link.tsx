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
                        <ExternalLink title="" url="" />
                    </li>
                </ul>
            </main>
            <Footer />
        </>
    );
};

export default LinkPage;
