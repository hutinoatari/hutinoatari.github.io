import { FC } from "react";
import PageHead from "../../../components/PageHead";
import Header from "../../../components/Header";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "node:querystring";
import Footer from "../../../components/Footer";
import ArticleItem from "../../../components/ArticleItem";
import { client } from "../../../libs/client";
import {
    ArticleListResponse,
    ArticleResponse,
    TagResponse,
} from "../../../types/api";

interface Props {
    articles: ArticleResponse[];
    tag: TagResponse;
}

interface Params extends ParsedUrlQuery {
    id: string;
}

const TagPage: FC<Props> = ({ articles, tag }) => {
    return (
        <>
            <PageHead title={`BLOG(タグ: ${tag.name})`} />
            <Header />
            <main>
                <h2>BLOG</h2>
                <h3>タグ: {tag.name}</h3>
                {articles.map((article: ArticleResponse) => (
                    <ArticleItem
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        publishedAt={article.publishedAt}
                        tagName={article.tag.name}
                        tagId={article.tag.id}
                    />
                ))}
            </main>
            <Footer />
        </>
    );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const data = await client.get<ArticleListResponse>({ endpoint: "tags" });

    const paths = data.contents.map((content) => `/blog/tag/${content.id}`);
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
    params,
}) => {
    const { id } = params ?? { id: "" };
    const blogData = await client.get<ArticleListResponse>({
        endpoint: "articles",
        queries: { filters: `tag[equals]${id}` },
    });
    const tagData = await client.get<TagResponse>({
        endpoint: "tags",
        contentId: id,
    });

    return {
        props: {
            articles: blogData.contents,
            tag: tagData,
        },
    };
};

export default TagPage;
