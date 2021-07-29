import { FC } from "react";
import Head from "next/head";
import { client } from "../../libs/client";
import { BlogListResponse, BlogResponse } from "../../types/api";
import styles from "../../styles/blog.module.scss";

interface Props {
    blog: BlogResponse;
}

const Blog: FC<Props> = ({ blog }) => {
    return (
        <>
            <Head>
                <meta name="og:title" content={blog.title} />
                <meta name="twitter:card" content="summary" />
            </Head>
            <h1>{blog.title}</h1>
            <main
                dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
                className={styles.post}
            />
        </>
    );
};

export const getStaticPaths = async () => {
    const data = await client.get<BlogListResponse>({ endpoint: "blog" });

    const paths = data.contents.map((content) => `/blog/${content.id}`);
    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const { id } = params;
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
