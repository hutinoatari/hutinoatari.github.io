import { FC } from "react";
import PageHead from "../components/PageHead";
import Link from "next/link";
import GalleryPost from "../components/GalleryPost";
import { client } from "../libs/client";
import {
    WorkListResponse,
    WorkResponse,
    CategoryListResponse,
    CategoryResponse,
} from "../types/api";
import styles from "../styles/Gallery.module.scss";

interface Props {
    works: WorkResponse[];
    categories: CategoryResponse[];
}

const GalleryPage: FC<Props> = ({ works, categories }) => {
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
            <h3>作品</h3>
            <div className={styles.container}>
                {works.map((work: WorkResponse) => (
                    <GalleryPost key={work.id} work={work} />
                ))}
            </div>
        </>
    );
};

export const getStaticProps = async () => {
    const workData = await client.get<WorkListResponse>({
        endpoint: "works",
        queries: { limit: 1024 },
    });
    const categoryData = await client.get<CategoryListResponse>({
        endpoint: "categories",
        queries: { limit: 1024 },
    });
    return {
        props: {
            works: workData.contents,
            categories: categoryData.contents,
        },
    };
};

export default GalleryPage;
