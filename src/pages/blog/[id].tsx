import { FC } from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "node:querystring";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { client } from "../../libs/client";
import { dateToYYYYMMDD } from "../../utils/util";
import { BlogListResponse, BlogResponse } from "../../types/api";
import styles from "../../styles/blog.module.scss";

interface Props {
    blog: BlogResponse;
}

interface Params extends ParsedUrlQuery {
    id: string;
}

const Blog: FC<Props> = ({ blog }) => {
    return (
        <>
            <Head>
                <title>{blog.title} | 淵野アタリのブログ</title>
                <meta name="og:title" content={blog.title} />
                <meta name="twitter:card" content="summary" />
            </Head>
            <Header title={blog.title}>
                <p>公開: {dateToYYYYMMDD(blog.publishedAt)}</p>
                <p>更新: {dateToYYYYMMDD(blog.updatedAt)}</p>
                <button
                    onClick={() => {
                        const baseURL = "https://twitter.com/intent/tweet";
                        const text = `${blog.title} by 淵野アタリのブログ`;
                        const url = `hutinoatari.dev/blog/${blog.id}`;
                        const params = new URLSearchParams();
                        params.append("text", text);
                        params.append("url", url);
                        const tweetURL = `${baseURL}?${params.toString()}`;
                        window.open(tweetURL, "_blank");
                    }}
                >
                    Twitterで共有する
                </button>
            </Header>
            <main
                dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
                className={styles.post}
            />
            <Footer />
        </>
    );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const data = await client.get<BlogListResponse>({ endpoint: "blog" });

    const paths = data.contents.map((content) => `/blog/${content.id}`);
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
    params,
}) => {
    const { id } = params ?? { id: "" };
    const data = await client.get<BlogResponse>({
        endpoint: "blog",
        contentId: id,
    });

    return {
        props: {
            blog: data,
        },
    };
};

export default Blog;
