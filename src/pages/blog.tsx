import { FC } from "react";
import PageHead from "../components/PageHead";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { client } from "../libs/client";
import { dateToYYYYMMDD } from "../utils/util";
import { BlogListResponse, BlogResponse } from "../types/api";

interface Props {
    blog: BlogResponse[];
}

const BlogPage: FC<Props> = ({ blog }) => {
    return (
        <>
            <PageHead title="BLOG" />
            <Header />
            <main>
                <h2>BLOG</h2>
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

export default BlogPage;
