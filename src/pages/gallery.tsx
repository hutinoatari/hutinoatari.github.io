import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHead from "../components/PageHead";
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
                    <div key={work.id} className={styles.item}>
                        <Link href={`/gallery/${work.id}`}>
                            <Image
                                alt={work.name}
                                src={work.image.url}
                                width={640}
                                height={480}
                                layout="responsive"
                            />
                        </Link>
                    </div>
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
