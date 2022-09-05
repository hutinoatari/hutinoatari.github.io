import { FC } from "react";
import { AppProps } from "next/app";
import "../styles/app.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Layout.module.scss";

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
};

export default App;
