import { FC } from "react";
import Head from "next/head";

interface Props {
    title?: string;
}

const PageHead: FC<Props> = ({ title }) => {
    const pageTitle = `${title ? `${title} | ` : ""}捻れたバベル`;
    return (
        <Head>
            <title>{pageTitle}</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width" />
            <meta
                name="description"
                content="淵野アタリのポートフォリオサイトです。手芸やプログラミングの作品を公開しています。"
            />
            <meta name="author" content="淵野アタリ" />
            <meta name="og:title" content={pageTitle} />
            <meta name="og:site_name" content="捻れたバベル" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@hutinoatari" />
        </Head>
    );
};

export default PageHead;
