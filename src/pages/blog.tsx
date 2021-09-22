import { FC } from "react";
import PageHead from "../components/PageHead";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticleItem from "../components/ArticleItem";
import { client } from "../libs/client";
import {
    ArticleListResponse,
    ArticleResponse,
    TagListResponse,
    TagResponse,
} from "../types/api";

interface Props {
    articles: ArticleResponse[];
    tags: TagResponse[];
}

const BlogPage: FC<Props> = ({ articles, tags }) => {
    return (
        <>
            <PageHead title="BLOG" />
            <Header />
            <main>
                <h2>BLOG</h2>
                <h3>タグ一覧</h3>
                <ul>
                    {tags.map((tag: TagResponse) => (
                        <li key={tag.id}>
                            <Link href={`/blog/tag/${tag.id}`}>
                                <a>{tag.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <h3>記事一覧</h3>
                {articles.map((blog: ArticleResponse) => (
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

export const getStaticProps = async () => {
    const articleData = await client.get<ArticleListResponse>({
        endpoint: "articles",
    });
    const tagData = await client.get<TagListResponse>({ endpoint: "tags" });
    return {
        props: {
            articles: articleData.contents,
            tags: tagData.contents,
        },
    };
};

export default BlogPage;
