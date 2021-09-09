import { FC } from "react";
import Head from "next/head";

interface Props {
    title?: string;
}

const PageHead: FC<Props> = ({ title }) => {
    const pageTitle = `${title ? `${title} | ` : ""}淵野アタリのブログ`;
    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="og:title" content={pageTitle} />
            <meta name="twitter:card" content="summary" />
        </Head>
    );
};

export default PageHead;
