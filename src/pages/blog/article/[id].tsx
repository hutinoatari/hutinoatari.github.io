import { FC } from "react";
import PageHead from "../../../components/PageHead";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "node:querystring";
import Footer from "../../../components/Footer";
import ReturnPageTopButton from "../../../components/ReturnPageTopButton";
import { client } from "../../../libs/client";
import { dateToYYYYMMDD } from "../../../utils/util";
import { ArticleListResponse, ArticleResponse } from "../../../types/api";
import styles from "../../../styles/article.module.scss";

interface Props {
    article: ArticleResponse;
}

interface Params extends ParsedUrlQuery {
    id: string;
}

const ArticlePage: FC<Props> = ({ article }) => {
    const tag = article.tag;
    return (
        <>
            <PageHead title={article.title} />
            <header>
                <p>
                    <Link href="/">
                        <a>捻れたパピルス</a>
                    </Link>
                </p>
                <h1>{article.title}</h1>
                <p>公開: {dateToYYYYMMDD(article.publishedAt)}</p>
                <p>
                    タグ:{" "}
                    <Link href={`/blog/tag/${tag.id}`}>
                        <a>{tag.name}</a>
                    </Link>
                </p>
                <p>
                    <Link href="/blog">
                        <a>記事一覧に戻る</a>
                    </Link>
                </p>
                <button
                    onClick={() => {
                        const baseURL = "https://twitter.com/intent/tweet";
                        const text = `${article.title} by 捻れたパピルス`;
                        const url = `hutinoatari.dev/blog/article/${article.id}`;
                        const params = new URLSearchParams();
                        params.append("text", text);
                        params.append("url", url);
                        const tweetURL = `${baseURL}?${params.toString()}`;
                        window.open(tweetURL, "_blank");
                    }}
                >
                    Twitterで共有する
                </button>
            </header>
            <main
                dangerouslySetInnerHTML={{ __html: `${article.body}` }}
                className={styles.post}
            />
            <ReturnPageTopButton />
            <Footer />
        </>
    );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const data = await client.get<ArticleListResponse>({
        endpoint: "articles",
    });

    const paths = data.contents.map((content) => `/blog/article/${content.id}`);
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
    params,
}) => {
    const { id } = params ?? { id: "" };
    const data = await client.get<ArticleResponse>({
        endpoint: "articles",
        contentId: id,
    });

    return {
        props: {
            article: data,
        },
    };
};

export default ArticlePage;
