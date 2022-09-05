import { FC } from "react";
import PageHead from "../components/PageHead";
import Link from "next/link";
import GalleryPost from "../components/GalleryPost";
import { client } from "../libs/client";
import {
    WorkListResponse,
    WorkResponse,
    TagListResponse,
    TagResponse,
} from "../types/api";
import styles from "../styles/Gallery.module.scss";

interface Props {
    works: WorkResponse[];
    tags: TagResponse[];
}

const GalleryPage: FC<Props> = ({ works, tags }) => {
    return (
        <>
            <PageHead title="GALLERY" />

            <h2>ギャラリー</h2>
            <h3>タグ</h3>
            <ul>
                {tags.map((tag: TagResponse) => (
                    <li key={tag.id}>
                        <Link href={`/gallery/tag/${tag.id}`}>
                            <a>{tag.name}</a>
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
    const tagData = await client.get<TagListResponse>({
        endpoint: "tags",
        queries: { limit: 1024 },
    });
    return {
        props: {
            works: workData.contents,
            tags: tagData.contents,
        },
    };
};

export default GalleryPage;
