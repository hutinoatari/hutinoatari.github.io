import { FC } from "react";
import PageHead from "../../../components/PageHead";
import Link from "next/link";
import Header from "../../../components/Header";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "node:querystring";
import Footer from "../../../components/Footer";
import { client } from "../../../libs/client";
import { dateToYYYYMMDD } from "../../../utils/util";
import {
    BlogListResponse,
    BlogResponse,
    TagResponse,
} from "../../../types/api";

interface Props {
    blog: BlogResponse[];
    tag: BlogResponse;
}

interface Params extends ParsedUrlQuery {
    id: string;
}

const TagPage: FC<Props> = ({ blog, tag }) => {
    return (
        <>
            <PageHead title="BLOG" />
            <Header />
            <main>
                <h2>BLOG</h2>
                <h3>タグ: {tag.name}</h3>
                <ul>
                    {blog?.map((blog: BlogResponse) => (
                        <li key={blog.id}>
                            <Link href={`/blog/article/${blog.id}`}>
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

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const data = await client.get<BlogListResponse>({ endpoint: "tags" });

    const paths = data.contents.map((content) => `/blog/tag/${content.id}`);
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
    params,
}) => {
    const { id } = params ?? { id: "" };
    const blogData = await client.get<BlogListResponse>({
        endpoint: "blog",
        queries: { filters: `tag[equals]${id}` },
    });
    const tagData = await client.get<TagResponse>({
        endpoint: "tags",
        contentId: id,
    });

    return {
        props: {
            blog: blogData.contents,
            tag: tagData,
        },
    };
};

export default TagPage;
