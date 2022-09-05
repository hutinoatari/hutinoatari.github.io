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
    TagListResponse,
    TagResponse,
} from "../../../types/api";
import styles from "../../../styles/Gallery.module.scss";

interface Props {
    works: WorkResponse[];
    tags: TagResponse[];
    tag: TagResponse;
}

interface Params extends ParsedUrlQuery {
    id: string;
}

const TagPage: FC<Props> = ({ works, tags, tag }) => {
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
            <h3>作品({tag.name})</h3>
            <div className={styles.container}>
                {works.map((work: WorkResponse) => (
                    <GalleryPost key={work.id} work={work} />
                ))}
            </div>
        </>
    );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const data = await client.get<TagListResponse>({
        endpoint: "tags",
    });

    const paths = data.contents.map((content) => `/gallery/tag/${content.id}`);
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as Params;
    const workData = await client.get<WorkListResponse>({
        endpoint: "works",
        queries: {
            limit: 1024,
            filters: `tag[equals]${id}`,
        },
    });
    const tagsData = await client.get<TagListResponse>({
        endpoint: "tags",
        queries: { limit: 1024 },
    });
    const tagData = await client.get<WorkListResponse>({
        endpoint: `tags/${id}`,
    });

    return {
        props: {
            works: workData.contents,
            tags: tagsData.contents,
            tag: tagData,
        },
    };
};

export default TagPage;
