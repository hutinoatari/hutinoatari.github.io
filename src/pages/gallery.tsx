import { FC } from "react";
import PageHead from "../components/PageHead";
import GalleryPost from "../components/GalleryPost";
import { client } from "../libs/client";
import { WorkListResponse, WorkResponse } from "../types/api";
import styles from "../styles/Gallery.module.scss";

interface Props {
    works: WorkResponse[];
}

const GalleryPage: FC<Props> = ({ works }) => {
    return (
        <>
            <PageHead title="GALLERY" />

            <h2>GALLERY</h2>
            <div className={styles.container}>
                {works.map((work: WorkResponse) => (
                    <GalleryPost key={work.id} work={work} />
                ))}
            </div>
        </>
    );
};

export const getStaticProps = async () => {
    const data = await client.get<WorkListResponse>({
        endpoint: "works",
        queries: { limit: 1024 },
    });
    return {
        props: {
            works: data.contents,
        },
    };
};

export default GalleryPage;
