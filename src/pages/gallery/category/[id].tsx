import { FC } from "react";
import PageHead from "../../../components/PageHead";
import Link from "next/link";
import GalleryPost from "../../../components/GalleryPost";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "node:querystring";
import { client } from "../../../libs/client";
import {
    WorkListResponse,
    WorkResponse,
    CategoryListResponse,
    CategoryResponse,
} from "../../../types/api";
import styles from "../../../styles/Gallery.module.scss";

interface Props {
    works: WorkResponse[];
    categories: CategoryResponse[];
    category: CategoryResponse;
}

interface Params extends ParsedUrlQuery {
    id: string;
}

const TagPage: FC<Props> = ({ works, categories, category }) => {
    return (
        <>
            <PageHead title="GALLERY" />

            <h2>ギャラリー</h2>
            <h3>カテゴリー</h3>
            <ul>
                {categories.map((category: CategoryResponse) => (
                    <li key={category.id}>
                        <Link href={`/gallery/category/${category.id}`}>
                            <a>{category.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <h3>作品({category.name})</h3>
            <div className={styles.container}>
                {works.map((work: WorkResponse) => (
                    <GalleryPost key={work.id} work={work} />
                ))}
            </div>
        </>
    );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const data = await client.get<CategoryListResponse>({
        endpoint: "categories",
    });

    const paths = data.contents.map(
        (content) => `/gallery/category/${content.id}`
    );
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as Params;
    const workData = await client.get<WorkListResponse>({
        endpoint: "works",
        queries: {
            limit: 1024,
            filters: `category[equals]${id}`,
        },
    });
    const categoriesData = await client.get<CategoryListResponse>({
        endpoint: "categories",
        queries: { limit: 1024 },
    });
    const categoryData = await client.get<CategoryResponse>({
        endpoint: `categories/${id}`,
    });

    return {
        props: {
            works: workData.contents,
            categories: categoriesData.contents,
            category: categoryData,
        },
    };
};

export default TagPage;
