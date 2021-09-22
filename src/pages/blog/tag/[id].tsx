import { FC } from "react";
import PageHead from "../../../components/PageHead";
import Header from "../../../components/Header";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "node:querystring";
import Footer from "../../../components/Footer";
import ArticleItem from "../../../components/ArticleItem";
import { client } from "../../../libs/client";
import {
    BlogListResponse,
    BlogResponse,
    TagResponse,
} from "../../../types/api";

interface Props {
    blog: BlogResponse[];
    tag: TagResponse;
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
                {blog?.map((blog: BlogResponse) => (
                    <ArticleItem
                        key={blog.id}
                        id={blog.id}
                        title={blog.title}
                        publishedAt={blog.publishedAt}
                        tagName={blog.tag.name}
                        tagId={blog.tag.id}
                    />
                ))}
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
