import { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
            <Header />
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
            <Footer />
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
