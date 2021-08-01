import { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import { client } from "../libs/client";
import { dateToYYYYMMDD } from "../utils/util";
import { BlogListResponse, BlogResponse } from "../types/api";

interface Props {
    blog: BlogResponse[];
}

const Top: FC<Props> = ({ blog }) => {
    return (
        <>
            <Head>
                <title>淵野アタリのブログ</title>
                <meta name="og:title" content="淵野アタリのブログ" />
                <meta name="twitter:card" content="summary" />
            </Head>
            <header>
                <h1>淵野アタリのブログ</h1>
            </header>
            <main>
                <ul>
                    {blog.map((blog: BlogResponse) => (
                        <li key={blog.id}>
                            <Link href={`/blog/${blog.id}`}>
                                <a>{blog.title}</a>
                            </Link>
                            ({dateToYYYYMMDD(blog.publishedAt)})
                        </li>
                    ))}
                </ul>
            </main>
            <footer>
                <p>
                    <small>(C)2021 淵野アタリ</small>
                </p>
            </footer>
        </>
    );
};

export const getStaticProps = async () => {
    const data = await client.get<BlogListResponse>({ endpoint: "blog" });

    return {
        props: {
            blog: data.contents,
        },
    };
};

export default Top;
