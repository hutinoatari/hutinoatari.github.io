import { FC } from "react";
import PageHead from "../components/PageHead";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ErrorPage: FC<{}> = () => {
    return (
        <>
            <PageHead title="NOT FOUND" />
            <Header />
            <main>
                <p>存在しないページです。</p>
            </main>
            <Footer />
        </>
    );
};

export default ErrorPage;
