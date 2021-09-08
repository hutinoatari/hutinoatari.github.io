import { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "node:querystring";
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

const BlogPage: FC<Props> = ({ blog }) => {
    return (
        <>
            <Head>
                <title>{blog.title} | 淵野アタリのブログ</title>
                <meta name="og:title" content={blog.title} />
                <meta name="twitter:card" content="summary" />
            </Head>
            <header>
                <Link href="/">
                    <a>淵野アタリのブログ</a>
                </Link>
                <h1>{blog.title}</h1>
                <p>公開: {dateToYYYYMMDD(blog.publishedAt)}</p>
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
            </header>
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

export default BlogPage;
