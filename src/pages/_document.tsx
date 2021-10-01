import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/Header";
import Footer from "../components/Footer";

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="ja">
                <Head />
                <body>
                    <Header />
                    <main>
                        <Main />
                    </main>
                    <Footer />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
