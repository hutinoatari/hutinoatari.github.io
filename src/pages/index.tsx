import { FC } from "react";
import PageHead from "../components/PageHead";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { client } from "../libs/client";
import { ArticleListResponse, ArticleResponse } from "../types/api";

interface Props {
    articles: ArticleResponse[];
}

const TopPage: FC<Props> = ({ articles }) => {
    return (
        <>
            <PageHead />
            <Header />
            <main>
                <h2>サイト説明</h2>
                <p>淵野アタリの手芸サークル「捻れたバベル」のホームページ。</p>
                <p>
                    <Link href="/about">
                        <a>もっと見る</a>
                    </Link>
                </p>
                <h2>最新3記事</h2>
                <ul>
                    {articles.map((article: ArticleResponse) => (
                        <li key={article.id}>
                            <Link href={`/blog/article/${article.id}`}>
                                <a>{article.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <p>
                    <Link href="/blog">
                        <a>もっと見る</a>
                    </Link>
                </p>
            </main>
            <Footer />
        </>
    );
};

export const getStaticProps = async () => {
    const data = await client.get<ArticleListResponse>({
        endpoint: "articles",
        queries: { limit: 3 },
    });

    return {
        props: {
            articles: data.contents,
        },
    };
};

export default TopPage;
